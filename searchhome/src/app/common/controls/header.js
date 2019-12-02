import { Header} from 'react-native-elements';
import React from 'react';
export const AppHeader = (props) => {

    return (
      <Header
      containerStyle={{ backgroundColor: '#fff' }}
      leftComponent={{ icon: 'arrow-back', style: { color: '#000', fontSize: 20, marginTop: 20, } }}
      leftContainerStyle={{ marginTop: 20 }}
      centerComponent={{ text: 'Đăng phòng', style: { color: '#000', fontSize: 20, marginTop: 20 } }}
      rightComponent={{ text: 'Huỷ', style: { color: '#F21212', fontSize: 20, paddingRight: '10%', marginTop: 20 } }}

  />
    )

} //()=>{return}