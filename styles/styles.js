import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  quoteContainer: {
    flex: 1,
    width: '80%',
    maxHeight: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  quoteScrollView: {
    maxHeight: '100%',
  },
  quote: {
    fontSize: 18,
    textAlign: 'center',
  },
  source: {
    fontSize: 16,
    marginTop: 10,
    textAlign: 'center',
  },
});

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   title: {
//     color: 'green',
//     fontSize: 28,
//   },
//   button: {
//     padding: 10,
//     paddingHorizontal: 20,
//     marginVertical: 5,
//     backgroundColor: '#0645AD',
//     marginHorizontal: 8,
//   },
//   buttonText: {
//     color: '#fff',
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   quote: {
//     fontSize: 17,
//     textAlign: 'center',
//     fontStyle: 'italic',
//     marginBottom: 15,
//   },
//   source: {
//     textAlign: 'right',
//     marginTop: 15,
//   },
//   quoteContainer: {
//     marginHorizontal: 20,
//     backgroundColor: '#fff',
//     padding: 10,
//     borderRadius: 5,
//   },
// });

export default styles;
