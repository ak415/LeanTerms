import * as ContractAPI from '../utils/contract_api';




export const RECEIVE_NEW_CONTRACT = "RECEIVE_NEW_CONTRACT";
export const RECEIVE_ALL_CONTRACTS = "RECEIVE_ALL_CONTRACT";
export const REMOVE_CONTRACT = "REMOVE_CONTRACT";


export const CreateNewContract = (data) =>(
      ContractAPI.CreateContract(data)
          .then((data) => dispatch(ReceiveNewContract(data))
          ,err => dispatch(ReceiveErrorContract(err)))
);


export const UpdateContract = (data,contractId) =>(
    ContractAPI.UpdateContract(data,contractId)
        .then((data) => dispatch(ReceiveNewContract(data))
            ,err => dispatch(RecieveErrorContract(err)))
);

export const DeleteContract = (contractId) => (
    ContractAPI.DeleteContract(contractId)
        .then((data) => dispatch(RemoveContract(contractId)),
        err => dispatch(ReceiveErrorContract(err)))
);

