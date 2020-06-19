import React from 'react';
import {useCallback, useState, useNavigation} from '@hooks';
import {HeaderLeft, HeaderTitle, SafeAreaView} from '@components';
import styles from './styles';
import {connect} from 'react-redux';
import {TGlobalState} from '@types';

const Profile: React.FC<TProps> = ({appGlobalState}) => {
  // const {setOptions} = useNavigation();

  return <SafeAreaView style={styles.container}></SafeAreaView>;
};

const mapStateToProps = (state: TGlobalState) => ({
  appGlobalState: state,
});

export default connect(mapStateToProps)(Profile);

type TProps = {
  appGlobalState: TGlobalState['appGlobalState'];
};
