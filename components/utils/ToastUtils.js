import Toast from 'react-native-toast-message';

export const showToast = () => {
  Toast.show({
    type: 'error',
    text1: 'Ошибка',
    text2: 'Cлишком много запросов, пожалуйста, хватит клацать!',
    topOffset: 70,
  });
};
