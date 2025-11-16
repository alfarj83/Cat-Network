import { View, StyleSheet} from 'react-native';
import CameraScreen from '@/components/CameraScreen';
import MapScreen from '@/components/MapScreen';
import KittyInfoCard from '@/components/KittyInfoCard';
import React from 'react';
import MapView from 'react-native-maps';
import LandingPage from '@/components/LandingPage';
import {useState} from 'react';

export default function HomeScreen() {

  return (
    <LandingPage/>
  );
}

//<KittyInfoCard title="" subtitle="" description="" tags={["hello", "hi"]}/>