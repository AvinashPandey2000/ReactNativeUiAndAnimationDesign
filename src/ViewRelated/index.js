// import React from 'react';
// import {View, Text} from 'react-native';

// export default function ViewRelated() {
//   return (
//     <View style={{flex: 1}}>
//       <View style={{height: 100, width: 100, backgroundColor: 'red'}} />
//       <View
//         style={{
//           backgroundColor: 'green',
//           flex: 1,
//           justifyContent: 'center',
//           alignItems: 'center',
//         }}>
//         <View
//           style={{
//             height: 100,
//             width: 100,
//             backgroundColor: 'yellow',
//             alignSelf: 'flex-end',
//             opacity: 0.2,
//           }}></View>
//         <View
//           style={{height: 100, width: 100, backgroundColor: 'white'}}></View>
//       </View>
//     </View>
//   );
// }

import React from 'react';
import {View, Text} from 'react-native';

export default function ViewRelated() {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          height: 100,
          width: 100,
          backgroundColor: 'green',
          position: 'absolute',
          bottom: 0,
          right: 0,
        }}></View>
    </View>
  );
}
