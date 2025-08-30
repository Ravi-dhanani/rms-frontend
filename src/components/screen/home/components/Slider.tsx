import React from 'react';
import { Dimensions, Image, View } from 'react-native';
import Swiper from 'react-native-swiper';

const { width } = Dimensions.get('window');

const images = [
  {
    id: 1,
    url: 'https://media.istockphoto.com/id/1460762245/photo/modern-style-hi-rise-blue-glass-building-exterior-with-transparent-wall-3d-render.jpg?s=612x612&w=0&k=20&c=a5V0dIHugs_dfzKDHP4NP6WR3lc00vA0wDpaMBrai3o=',
    caption: 'Cute Cat 1',
  },
  {
    id: 2,
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBJK86FU_BQN_cc97YJLCuhh_InRpW6HiukV02KxteYil3kBP9CaERWaLAof0Z8lJTPtI&usqp=CAU',
    caption: 'Cute Cat 2',
  },
  {
    id: 3,
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqMuVWLxVWdxAhl5eu5LbbDebK7FU8vfQgwd6sdKGEYUNr1McbFyfLmXDpE-B12Tivh_s&usqp=CAU',
    caption: 'Cute Cat 3',
  },
];

export default function Slider() {
  return (
    <View style={{ height: 250 }}>
      <Swiper autoplay showsPagination={false}>
        {images.map(item => (
          <View
            key={item.id}
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Image
              source={{ uri: item.url }}
              style={{ width: width - 40, height: 200, borderRadius: 12 }}
              resizeMode="cover"
            />
          </View>
        ))}
      </Swiper>
    </View>
  );
}
