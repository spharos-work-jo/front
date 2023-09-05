import { signatureType } from "@/types/signatureType";

const accessKey:string="hVHaz8GvmF8NbApaZ9lf";

const serviceId:string="ncp:sms:kr:305677320894:ssg_work_2team";

const secretKey:string="bmHhPPieedlJM7tRISIUAzaLitYrWskBeFG7Zq6D";

let time = new Date();

let timegetTime = time.getTime();

const timestamp:string = timegetTime.toString();

const signatureData:signatureType = {
  method:"POST",
  space:"",
  url:"/sms/v2/services" + serviceId + "/messages",
  newLine:"\n",
  timestamps:timestamp,
  newLine2:"\n",
  access:accessKey,
  secret:secretKey

};

export default signatureData