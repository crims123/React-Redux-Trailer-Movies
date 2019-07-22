export const request = type => {
  return {
    type
  };
};

export const received = (type, payload) => {
  return {
    type,
    payload
  };
};

export const error = type => {
  return {
    type
  };
};
