const _ = 'this is only a test';

console.log({ _ });

const n = (x = '') => {
  if (x) {
    return false;
  } else {
    return true;
  }
};

n();

// just n
