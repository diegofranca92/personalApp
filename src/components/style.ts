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
  card: {
    backgroundColor: '#4b5aaf',
    marginVertical: 8,
    padding: 12,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 20,
    textAlign: 'center',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  button: {
    marginVertical: 12,
    backgroundColor: '#2d47d8',
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
  title: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  subtitle: {
    color: 'black',
    marginBottom: 40,
  },
  description: {
    color: 'black',
    marginBottom: 20,
  },
  textArea: {
    width: '100%',
    marginBottom: 12,
    borderWidth: 1,
    padding: 16,
    fontSize: 14,
    color: '#FFFFFF',
  },
});
