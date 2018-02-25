import * as ContractAPI from '../utils/contract_api';

export const RECEIVE_NEW_CONTRACT = 'RECEIVE_NEW_CONTRACT';
export const RECEIVE_ALL_CONTRACTS = 'RECEIVE_ALL_CONTRACT';
export const REMOVE_CONTRACT = 'REMOVE_CONTRACT';

export const receiveContract = contract => ({
  type: RECEIVE_NEW_CONTRACT,
  contract
});

export const createContract = contract => dispatch => {
  return ContractAPI.createContract(contract).then(createdContract =>
    dispatch(receiveContract(createContract))
  );
};

// export const CreateNewContract = data =>
//   ContractAPI.CreateContract(data).then(
//     serverData => dispatch(ReceiveNewContract(serverData)),
//     err => dispatch(ReceiveErrorContract(err))
//   );

// export const UpdateContract = (data, contractId) =>
//   ContractAPI.UpdateContract(data, contractId).then(
//     serverData => dispatch(ReceiveNewContract(serverData)),
//     err => dispatch(RecieveErrorContract(err))
//   );
//
// export const DeleteContract = contractId =>
//   ContractAPI.DeleteContract(contractId).then(
//     data => dispatch(RemoveContract(contractId)),
//     err => dispatch(ReceiveErrorContract(err))
//   );
