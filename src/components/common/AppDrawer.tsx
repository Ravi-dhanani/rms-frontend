import * as React from 'react';
import { Drawer } from 'react-native-paper';

export default function AppDrawer() {
  const [active, setActive] = React.useState('');

  return (
    <Drawer.Section>
      <Drawer.Item
        label="First Item"
        active={active === 'first'}
        onPress={() => setActive('first')}
      />
      <Drawer.Item
        label="Second Item"
        active={active === 'second'}
        onPress={() => setActive('second')}
      />
    </Drawer.Section>
  );
}
