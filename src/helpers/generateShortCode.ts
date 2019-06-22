export function generateShortCode(code : number | string , amount: number) : string{
  let shortcode: string = "*151*";

  if(code.toString().length < 9){
    shortcode += "2*2*";
  } else {
    shortcode += "1*1*";
  }

  shortcode += amount.toString();
  shortcode += "#";
  return shortcode;
}