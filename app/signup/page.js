import NextImage from 'next/image';
import { Text, Group, Button, Box, Image, TextInput, PasswordInput, Select } from '@mantine/core';
import Logo from '../../images/Logo.png';
import styles from '../../styles/StylesOne.module.css';
import { IconChevronDown } from '@tabler/icons-react';

const page = () => {

  const icon = <IconChevronDown style={{ width: '20px', height: '20px', color: '#0E3465' }} />;
  return (
    <Box className={styles.container}>
      <Image component={NextImage} src={Logo} className={styles.logo} alt="My image" />     
      <Box className={`${styles.signUpSideForm} ${styles.sideForm}`}>
        <Text className={styles.title} component="h1">
          Sign Up
        </Text>
        <Box component="form" className={styles.signupForm}>
          <TextInput label="First Name" placeholder="Ibrahim" classNames={{ input: styles.input, label: styles.label }} />
          <TextInput label="Last Name" placeholder="Musa" classNames={{ input: styles.input, label: styles.label }} />
          <TextInput label="Your email" placeholder="musa@fieldbase.co.uk" classNames={{ input: styles.signUpEmailInput, label: styles.labelV2 }} />
          <TextInput label="Phone no" placeholder="234 12 461 3200" classNames={{ input: styles.signUpPhoneInput, label: styles.labelV2 }} />
          <Select
            label="Role"
            placeholder="Ops"
            data={['Ops', 'Admin', 'User']}
            rightSection={icon}
            classNames={{ input: styles.signUpEmailInput, label: styles.labelV2 }}
          />
          <PasswordInput
            label="Password"
            placeholder="At least 8 characters"
            rightSection={" "}
            classNames={{ input: styles.input, label: styles.label, innerInput: styles.innerInput }}
          />
          <PasswordInput
            label="Confirm Password"
            placeholder="Retype the password"
            rightSection={" "}
            classNames={{ input: styles.input, label: styles.label, innerInput: styles.innerInput }}
          />
          <Group mt='8px' className={styles.buttonGroup}>
            <Button type="submit" fullWidth className={styles.submitButton}>
              Sign Up
            </Button>
          </Group>
          <Text align="center" className={styles.signInLink}>
            Already have an account? Sign in
          </Text>
        </Box>
      </Box>
      <Box className={styles.sideImage}>
        <Box className={styles.sideImageOverlay} />
      </Box>
    </Box>
  );
}

export default page