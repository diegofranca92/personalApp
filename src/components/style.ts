import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  pageContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    width: '100%',
    padding: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 120,
    textAlign: 'center',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  button: {
    marginBottom: 12,
    backgroundColor: '#841584',
    padding: 12,
    alignItems: 'center',
  },
  input: {
    width: '100%',
    height: 50,
    marginBottom: 12,
    borderWidth: 1,
    padding: 16,
  },
});
