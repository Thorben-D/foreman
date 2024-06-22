import React from 'react';
import PropTypes from 'prop-types';

import { useForemanPermissions } from '../../../Root/Context/ForemanContext';

export const usePermission = requiredPermission =>
  useForemanPermissions().has(requiredPermission);

export const Permitted = props => {
  const isPermitted = usePermission(props.requiredPermission);
  return <> {isPermitted && props.children} </>;
};

Permitted.propTypes = {
  requiredPermission: PropTypes.string,
  children: PropTypes.node,
};
Permitted.defaultProps = {
  requiredPermission: '',
  children: null,
};
