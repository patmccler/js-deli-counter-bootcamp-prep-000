
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
