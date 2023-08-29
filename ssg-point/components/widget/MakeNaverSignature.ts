import { signatureType } from "@/types/signatureType";
import CryptoJS from "crypto-js";

export const signatureCrypto = ( signatureData: signatureType) => {
  
  let hmac = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, signatureData.secret);
  
  hmac.update(signatureData.method)
  hmac.update(signatureData.space)
  hmac.update(signatureData.url)
  hmac.update(signatureData.newLine)
  hmac.update(signatureData.timestamps)
  hmac.update(signatureData.newLine2)
  hmac.update(signatureData.access);

  let hash = hmac.finalize();

  return hash.toString(CryptoJS.enc.Base64);
}
