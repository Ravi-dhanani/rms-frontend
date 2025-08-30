import { yupResolver } from '@hookform/resolvers/yup';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  View,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Button, Text } from 'react-native-paper';
import * as yup from 'yup';
import { RootStackParamList } from '../../../../App';
import FormTextField from '../../common/FormTextField';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

type FormData = {
  identifier: string;
  password: string;
};

const schema = yup.object().shape({
  identifier: yup
    .string()
    .required('Mobile Number is required')
    .matches(/^[0-9]{10}$/, 'Enter a valid 10-digit mobile number'),

  password: yup.string().required('Password is required'),
});

export default function Login({ navigation }: Props) {
  const [secure, setSecure] = useState(true);

  const { control, handleSubmit } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log('Login Data:', data);
    navigation.replace('Home');
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <KeyboardAwareScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        enableOnAndroid
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.container}>
          {/* Avatar */}
          <View style={styles.avatar}>
            <Image
              source={require('../../../assets/smile.png')}
              style={styles.logo}
            />
          </View>

          <Text variant="headlineMedium" style={styles.title}>
            Welcome back!
          </Text>

          <FormTextField
            control={control}
            name="identifier"
            label="Mobile Number"
          />

          <FormTextField
            control={control}
            name="password"
            label="Password"
            secureTextEntry={secure}
            setSecure={setSecure}
          />

          <Button
            mode="contained"
            style={styles.loginBtn}
            onPress={handleSubmit(onSubmit)}
          >
            Login
          </Button>
        </View>
      </KeyboardAwareScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  avatar: {
    borderRadius: 100,
    backgroundColor: '#0098FF',
    height: 90,
    width: 90,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
  },
  title: {
    color: '#000',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    marginBottom: 8,
  },
  loginBtn: {
    width: '100%',
    borderRadius: 8,
    marginTop: 10,
    backgroundColor: '#0098FF',
    padding: 2,
  },
  errorText: {
    alignSelf: 'flex-start',
    color: 'red',
    marginBottom: 8,
    fontSize: 12,
  },
});
