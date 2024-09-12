"use client"
import NextImage from 'next/image';
import { Text, TextInput, Button, Group, Box, Image, Center, Stack } from '@mantine/core';
import Logo from '../../images/Logo.png';
import styles from '../../styles/StylesOne.module.css';
import { useRouter } from 'next/navigation';

const page = () => {
  const router = useRouter();
  const handleConfirmEmail = () => {
    router.push('/confirm-email');
  };

  return (
    <Box className={styles.container}>
      <Image component={NextImage} src={Logo} className={styles.logo} alt="My image" />      
      <Box className={styles.sideForm}>
        <Box>
        <Text className={styles.title} component="h1">
          Reset Your Password
        </Text>
        <Text className={styles.resetTitleText}>
          We will send you an email with a link to change your password.
        </Text>
        </Box>
        <Box component="form" className={styles.form}>          
            <TextInput
              placeholder="name@fieldbase.co.uk"
              label="Your email"
              classNames={{ input: styles.input, label: styles.label }}
            />
            <Box className={styles.buttonGroup}>
              <Button onClick={handleConfirmEmail} fullWidth className={styles.submitButton}>
                Reset
              </Button>
            </Box>          
        </Box>
      </Box>
      <Box className={styles.sideImage}>
        <Box className={styles.sideImageOverlay} />
      </Box>
    </Box>
  );
}

export default page