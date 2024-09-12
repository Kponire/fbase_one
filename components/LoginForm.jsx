
"use client"
import NextImage from 'next/image';
import { Text, TextInput, PasswordInput, Button, Group, Stack, Box, Image, Anchor } from '@mantine/core';
import Logo from '../images/Logo.png';
import styles from '../styles/StylesOne.module.css';
import { useRouter } from 'next/navigation';

export default function LoginForm() {
  const router = useRouter();

  const handleCreateAccount = () => {
    router.push('/signup');
  };

  const handleForgotPassword = () => {
    router.push('/reset-password');
  };

  const handleLogin = () => {
    router.push('/clients/companies');
  };

  return (
    <Box className={styles.container}>
      <Box className={styles.sideForm}>
        <Image component={NextImage} src={Logo} className={styles.logo} alt="My image" />
        <Text className={styles.loginTitle} component="h1">Login</Text>
        <Box component="form" className={styles.loginForm}>
          
          <TextInput
            label="Your email"
            placeholder="muso@fieldbase.co.uk"
            classNames={{
              label: styles.label,
              input: styles.logininput,
            }}
          />
          <PasswordInput
            label="Password"
            placeholder="********"
            rightSection={" "}
            classNames={{
              label: styles.label,
              input: styles.logininput,
              innerInput: styles.logininnerInput,
            }}
          />
          
          <Anchor 
            className={styles.forgotPassword} 
            onClick={handleForgotPassword}
          >
            Forgot your password?
          </Anchor>
          <Group>
            <Button onClick={handleLogin} fullWidth className={styles.submitButton}>
              Login
            </Button>
          </Group>
          <Anchor  className={styles.createAccount} onClick={handleCreateAccount}>
          Create an account
        </Anchor>
        </Box>
      </Box>
      <Box className={styles.sideImage}>
        <Box className={styles.sideImageOverlay} />
      </Box>
    </Box>
  );
}
