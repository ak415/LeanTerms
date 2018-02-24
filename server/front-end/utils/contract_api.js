export const CreateContract = (data) =>(
    $.ajax({
        method: "POST",
        url: "/api/contracts",
        data
    })
);

export const ShowContract = (ContractId) =>(
  $.ajax({
      method:"GET",
      url: `/api/contracts/${ContractId}`,
  })
);

export const UpdateContract = (data,ContractId) =>(
  $.ajax({
      method: "PATCH",
      url: `/api/contracts/${ContractId}`,
      data
  })
);

export const DeleteContract = (ContractId) =>(
  $.ajax({
      method: "DELETE",
      url: `/api/contracts/${ContractId}`
  })
);


