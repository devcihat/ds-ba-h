import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';


import styles from './styles';

const useStyles = makeStyles(styles);

const Disclaimer = () => {
  const { t } = useTranslation();
  const classes = useStyles();

  return (
   <>
   </>
  );
};

export default memo(Disclaimer);
