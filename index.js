
function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(line)
{
  if(line.length > 0) {
    return `Currently serving ${line.shift()}.`
  }
  else {
    return `There is nobody waiting to be served!`
  }
}

function currentLine(line) {
  if(line.length > 0)
  {
    var line_str = ""
    for(let i = 0; i < line.length; i++)
    {
      line_str = line_str + line[i]
    }
    return line_str
  }
  else {
    return "The line is currently empty."
  }
}