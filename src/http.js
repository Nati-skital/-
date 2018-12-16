class Http {
  
 async get(url){
  const response = await fetch(url);
  const resDate = await response.json();
  return resDate; 
 }
}

export const http = new Http();