var myArray = [
    {'num_bloc':'0',
    'hash':'',
    'id_contributeur':'3sMclDfSGyOuTLwnxnwlhyrsa78nG2SIajcHT55K',
    'nonce':'175'},
    {'num_bloc':'1',
    'hash':'095a54d5cee3538d68bbd58e06931e4a89bbcdd53d09f9778eec2173b6714bdd',
    'id_contributeur':'3sMclDfSGyOuTLwnxnwlhyrsa78nG2SIajcHT55K',
    'nonce':'90'},
    {'num_bloc':'0',
    'hash':'1ea9603eae50a8e3a866eb6e1eae8114e44bf45f1b4ed25d4e632213ac7c2a6c',
    'id_contributeur':'3sMclDfSGyOuTLwnxnwlhyrsa78nG2SIajcHT55K',
    'nonce':'175'},
    {'num_bloc':'0',
    'hash':'35bd0086f154e35ff9d9198686a62abb9131fa9847a6185c2ffb939980f25e24',
    'id_contributeur':'3sMclDfSGyOuTLwnxnwlhyrsa78nG2SIajcHT55K',
    'nonce':'175'},
    {'num_bloc':'0',
    'hash':'50c3b12a2ff6a90e0fb897cb6e2996b28e3c073c27a772f7d197ad37239c18b8',
    'id_contributeur':'3sMclDfSGyOuTLwnxnwlhyrsa78nG2SIajcHT55K',
    'nonce':'175'},
    {'num_bloc':'0',
    'hash':'28789bbb009b8f7206975b6a4a7d310b78a3888e645c1f855de345cd782aa357',
    'id_contributeur':'3sMclDfSGyOuTLwnxnwlhyrsa78nG2SIajcHT55K',
    'nonce':'175'},
    {'num_bloc':'0',
    'hash':'40fc037334459054f57c4a487ce027c7919ef43cc5dcad8dbad2b36d1ea15c0a',
    'id_contributeur':'3sMclDfSGyOuTLwnxnwlhyrsa78nG2SIajcHT55K',
    'nonce':'175'},
]

buildTable(myArray)



function buildTable(data){
  var table = document.getElementById('myTable')

  for (var i = 0; i < data.length; i++){
    var row = `<tr>
            <td>${data[i].num_bloc}</td>
            <td>${data[i].hash}</td>
            <td>${data[i].id_contributeur}</td>
            <td>${data[i].nonce}</td>
          </tr>`
    table.innerHTML += row


  }
}
