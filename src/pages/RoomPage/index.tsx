import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {RootState, store} from '@/store';
import axios from 'axios';
import {backendUrl, webSocketUrl} from '@/common/constants/url';
import {getRoom} from '@/store/slices/roomSlice';
import {io} from 'socket.io-client';
import {Outlet, useNavigate, useParams} from "react-router-dom";
import {Typography} from "@mui/material";


const Index = () => {
  const {id} = useParams();
  const {currentUser} = useSelector((state: RootState) => state.user);
  const navigate = useNavigate()

  async function fetchRoom(id: string) {
    const response = await axios.get(backendUrl + `/rooms/${id}`);
    store.dispatch(getRoom(response.data));
  }

  useEffect(() => {
    if (!id) {
      return
    }

    void fetchRoom(id);
  }, [id]);


  useEffect(() => {
    if (!currentUser._id) {
      return;
    }

    const socket = io(webSocketUrl);
    socket.on('connect', () => {
      socket.emit('join room', {
        roomId: id,
        userName: currentUser.name,
        userId: currentUser._id,
      });
      console.log('connected to server')
    });

    socket.on('update room', newValue => {
      if (!newValue) {
        return;
      }
      store.dispatch(getRoom(newValue));
    });

    navigate('./main')

    // window.addEventListener('beforeunload', ev => {
    //   ev.preventDefault();
    //   socket.emit('leave room', {
    //     roomId: id.toString(),
    //     userId: currentUser._id,
    //   });
    // });

    return () => {
      socket.off('connect');
      socket.off('disconnect');
      socket.emit('leave room', {
        roomId: id,
        userId: currentUser._id,
      });
    };
  }, [id, currentUser._id]);

  return <>
    <Typography color='success'>Связь установлена</Typography>
    <Outlet/>
  </>;
};

export default Index;
