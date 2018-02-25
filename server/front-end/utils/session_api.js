import $ from 'jquery';

export const createUser = user =>
  $.ajax({
    method: 'POST',
    url: '/api/signup',
    data: user
  });

export const LoginUser = user => {
  let promise = $.ajax({
    method: 'POST',
    url: '/api/login',
    data: user
  });
  return promise;
};

export const Logout = () =>
  $.ajax({
    url: '/api/logout'
  });

export const currentUser = () => {
  return $.ajax({
    url: '/api/current_user'
  });
};
