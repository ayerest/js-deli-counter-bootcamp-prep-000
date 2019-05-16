function takeANumber(deli_line, name) {
  deli_line.push(name);
  return `Welcome, ${name}. You are number ${deli_line.length} in line.`
}

function nowServing(deli_line) {
  if (deli_line.length > 0) {
    return `Currently serving ${deli_line[0]}.`
    deli_line.shift(); 
  } else {
    return "There is nobody waiting to be served!";
  }
}
