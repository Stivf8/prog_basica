var numeros = 100;
for (var i = 1; i <= numeros; i++)
{
  if(i % 3 == 0)
  {
    document.write("Fis");
  }
  if(i % 5 == 0)
  {
    document.write("bos");
  }
  if(i % 3 != 0 && i % 5 != 0)
  {
    document.write(i);
  }
  document.write("<br />");
}
