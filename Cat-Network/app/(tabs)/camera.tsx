// import React, { useEffect, useState } from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import {
//   Camera,
//   useCameraDevice,
//   useCameraPermission,
// } from 'react-native-vision-camera';
  
// export default function CameraPage() {
//     const { hasPermission, requestPermission } = useCameraPermission();
//     const [isPermissionGranted, setIsPermissionGranted] = useState(false);
//     const device = useCameraDevice('back');

//     useEffect(() => {
//       // Check if we already have permission
//       if (hasPermission) {
//         setIsPermissionGranted(true);
//         return;
//       }
  
//       // If not, request it
//       const request = async () => {
//         const granted = await requestPermission();
//         setIsPermissionGranted(granted);
//       };
//       request();
//     }, [hasPermission, requestPermission]);
  
//     // Handle loading states
//     if (!isPermissionGranted) {
//       return (
//         <View style={styles.container}>
//           <Text>Requesting camera permission...</Text>
//         </View>
//       );
//     }
  
//     if (device == null) {
//       return (
//         <View style={styles.container}>
//           <Text>No camera device found.</Text>
//         </View>
//       );
//     }
  
//     // Render the camera
//     return (
//       <Camera
//         style={StyleSheet.absoluteFill}
//         device={device}
//         isActive={true}
//       />
//     );
// }
  
// const styles = StyleSheet.create({
// container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
// },
// });