import React from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Checkbox from '@material-ui/core/Checkbox';
import InputLabel from '@material-ui/core/InputLabel';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import { Avatar, Box, Button } from '@material-ui/core';

import styles from './styles';
import { platforms, assets } from './constants';

const useStyles = makeStyles(styles);

const Filters = ({
  toggleFilter,
  filters,
  platform,
  vaultType,
  asset,
  order,
  setPlatform,
  setVaultType,
  setAsset,
  setOrder,
}) => {
  const { t } = useTranslation();
  const classes = useStyles();

  const handlePlatformChange = event => setPlatform(event.target.value);
  const handleVaultTypeChange = event => setVaultType(event.target.value);
  const handleAssetChange = (_event, option) => setAsset(option.value);
  const handleOrderChange = event => setOrder(event.target.value);

  const options = [
    {
      value: 'All',
      label: t('Filters-All'),
    },
    ...assets.map(asset => ({
      value: asset,
      label: asset,
    })),
  ];

  const resetFilter = () => {
    toggleFilter('resetAll');
    setPlatform('All');
    setVaultType('All');
    setAsset('All');
    setOrder('All');
  };

  return (
    <Grid container spacing={2} className={classes.container}>
      {/* <Grid item xs={6} md={3}>
        <Button className={classes.reset} onClick={resetFilter}>
          {t('Filters-Reset')}
        </Button>
        <FormControl>
          <FormControlLabel
            className={classes.label}
            control={
              <Checkbox
                checked={filters.hideZeroBalances}
                onChange={() => toggleFilter('hideZeroBalances')}
                color="primary"
              />
            }
            // TODO: translate labels
            label={t('Hide-Zero-Balances')}
          />
        </FormControl>
      </Grid> */}

      {/* <Grid item xs={6} md={3}>
        <FormControl>
          <FormControlLabel
            className={classes.label}
            control={
              <Checkbox
                checked={!filters.hideDecomissioned}
                onChange={() => toggleFilter('hideDecomissioned')}
                color="primary"
              />
            }
            // TODO: translate labels
            label={t('Retired-Vaults')}
          />
        </FormControl>
      </Grid> */}

      {/* <Grid item xs={6} md={3}>
        <FormControl>
          <FormControlLabel
            className={classes.label}
            control={
              <Checkbox
                checked={filters.hideZeroVaultBalances}
                onChange={() => toggleFilter('hideZeroVaultBalances')}
                color="primary"
              />
            }
            // TODO: translate labels
            label={t('Hide-Zero-Vault-Balances')}
          />
        </FormControl>
      </Grid> */}

      {/* <Grid item xs={6} md={3}>
        <FormControl>
          <FormControlLabel
            className={classes.label}
            control={
              <Checkbox
                checked={filters.showBoosted}
                onChange={() => toggleFilter('showBoosted')}
                color="primary"
              />
            }
            label={
              <Box className={classes.boost}>
                Boost
                <Avatar className={classes.fire} src={require('images/stake/fire.png')} />
              </Box>
            }
          />
        </FormControl>
      </Grid> */}

      <Grid item xs={6} md={9}>
        <FormControl className={classes.selectorContainer}>
          <Button className="mx-2 text-dark" style={{ backgroundColor: "gray", borderRadius:"30px", fontSize:"10px" }} key={'All'} value={'All'} onClick={() => setPlatform('All')}>
            {t('Filters-All')}
          </Button>
          {platforms.map(platform => (
            <Button className="mx-2" style={{ backgroundColor:"#fff", borderRadius:"30px",textAlign:"center",fontSize:"10px",color:"black" }} key={platform} value={platform} onClick={() => setPlatform(platform)}>
              {platform}
            </Button>
          ))}
        </FormControl>
      </Grid>

      {/* <Grid item xs={6} md={3}>
        <FormControl className={classes.selectorContainer}>
          <InputLabel id="select-vault-type-label" className={classes.selectorLabel}>
            {t('Filters-Vault-Type')}
          </InputLabel>
          <Select
            value={vaultType}
            onChange={handleVaultTypeChange}
            className={classes.selector}
            id="select-vault-type"
            labelId="select-vault-type-label"
          >
            <MenuItem key={'All'} value={'All'}>
              {t('Filters-All')}
            </MenuItem>
            <MenuItem key={'Singles'} value={'Singles'}>
              {t('Single Assets')}
            </MenuItem>
            <MenuItem key={'StableLPs'} value={'StableLPs'}>
              {t('Stable LPs')}
            </MenuItem>
            <MenuItem key={'Stables'} value={'Stables'}>
              {t('Stables')}
            </MenuItem>
          </Select>
        </FormControl>
      </Grid> */}

      {/* <Grid item xs={6} md={3}>
        <FormControl className={classes.selectorContainer}>
          <Autocomplete
            value={options.find(option => option.value === asset)}
            onChange={handleAssetChange}
            className={classes.selector}
            id="select-asset"
            options={options}
            getOptionLabel={option => option.label}
            renderInput={params => (
              <TextField
                {...params}
                label={t('Filters-Asset')}
                InputLabelProps={{
                  className: classes.selectorLabel,
                }}
              />
            )}
            disableClearable
          />
        </FormControl>
      </Grid> */}

      <Grid item xs={6} md={3}>
        <FormControl className={classes.selectorContainer}>
         
          {/* <Select
            value={order}
            onChange={handleOrderChange}
            className={classes.selector}
            id="select-order"
            labelId="select-order-label"
          > */}
          <Button value={'apy'} onClick={() => setPlatform('apy')}>
            APY
          </Button>
          <Button value={'tvl'} onClick={() => setPlatform('tvl')}>
            TVL
          </Button>
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default Filters;
