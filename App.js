import React, {useEffect, useRef, useState} from 'react';
import {StyleSheet, ScrollView, View, Text, StatusBar} from 'react-native';

const App: () => React$Node = () => {
  const [values, setValues] = useState(null);
  const scrollViewRef = useRef(null);

  useEffect(() => {
    setValues({
      getInnerViewNode: typeof scrollViewRef.current.getInnerViewNode(),
      getInnerViewRef: typeof scrollViewRef.current.getInnerViewRef(),
    });
  }, []);

  return (
    <>
      <StatusBar barStyle="dark-content" />

      <ScrollView ref={scrollViewRef} style={styles.scrollView}>
        <View style={styles.body}>
          <Text>getInnerViewNode: {values?.getInnerViewNode}</Text>
          <Text>{'\n'}</Text>
          <Text>getInnerViewRef: {values?.getInnerViewRef}</Text>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  body: {
    paddingTop: 100,
    alignSelf: 'center',
  },
});

export default App;
