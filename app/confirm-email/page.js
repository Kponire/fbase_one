import NextImage from 'next/image';
import { Text, Group, Button, Box, Image, PinInput, Center } from '@mantine/core';
import Logo from '../../images/Logo.png';
import styles from '../../styles/StylesOne.module.css';

const page = () => {
  return (
    <Box className={styles.container}>
      <Image component={NextImage} src={Logo} className={styles.logo} alt="My image" />      
      <Box className={styles.sideForm}>
        <Box>
        <Text className={styles.title} component="h1">
          Confirm Email
        </Text>
        <Text className={styles.confirmTitleText}>
          Please insert bellow the 6 digits code we have sent to your email to activate your account
        </Text>
        </Box>
        <Box component="form" className={styles.form}>
          <Center>
            <PinInput
              length={6}
              placeholder="-"
              type="alphanumeric"
              classNames={{ input: styles.pinInput, root: styles.pinInputroot }}
            />
          </Center>
          <Group className={styles.buttonGroup}>
            <Button type="submit" fullWidth className={styles.submitButton}>
              Confirm
            </Button>
          </Group>
        </Box>
      </Box>
      <Box className={styles.sideImage}>
        <Box className={styles.sideImageOverlay} />
      </Box>
    </Box>
  );
}

export default page