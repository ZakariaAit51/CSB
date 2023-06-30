// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();

// owl carousel 

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 6
        }
    }
})


var items = [];

function addItem() {
  var itemName = document.getElementById('item-name').value;
  var itemPrice = parseFloat(document.getElementById('item-price').value);
  var itemQuantity = parseInt(document.getElementById('item-quantity').value);

  var item = {
    name: itemName,
    price: itemPrice,
    quantity: itemQuantity
  };

  items.push(item);
  renderItems();

  document.getElementById('item-name').value = '';
  document.getElementById('item-price').value = '';
  document.getElementById('item-quantity').value = '';
}

function renderItems() {
  var itemsHTML = '';
  for (var i = 0; i < items.length; i++) {
    var item = items[i];
    var total = item.price * item.quantity;

    itemsHTML += '<tr>';
    itemsHTML += '<td>' + item.name + '</td>';
    itemsHTML += '<td class="text-center">' + item.price.toFixed(2) + '</td>';
    itemsHTML += '<td class="text-center">' + item.quantity + '</td>';
    itemsHTML += '<td class="text-right">' + total.toFixed(2) + '</td>';
    itemsHTML += '</tr>';
  }

  document.getElementById('facture-items').innerHTML = itemsHTML;
}

function generateFacture() {
  var entreprise = document.getElementById('entreprise').value;
  var adresse = document.getElementById('adresse').value;
  var adresse2 = document.getElementById('adresse2').value;
  var adresse3 = document.getElementById('adresse3').value;
  var email = document.getElementById('email').value;

  var billedTo = document.getElementById('billed-to');
  billedTo.innerText = entreprise;
  var billedAddress = document.getElementById('billed-address');
  billedAddress.innerText = adresse;
  var billedAddress2 = document.getElementById('billed-address2');
  billedAddress2.innerText = adresse2;
  var billedAddress3 = document.getElementById('billed-address3');
  billedAddress3.innerText = adresse3;

  var shippedTo = document.getElementById('shipped-to');
  shippedTo.innerText = entreprise;
  var paymentMethod = document.getElementById('payment-method');
  paymentMethod.innerText = 'Payment CASH';
  var emailElement = document.getElementById('email');
  emailElement.innerText = email;

  var currentDate = new Date();
  var factureDate = document.getElementById('facture-date');
  factureDate.innerText = currentDate.toLocaleDateString();

  var subtotal = 0;
  for (var i = 0; i < items.length; i++) {
    var item = items[i];
    subtotal += item.price * item.quantity;
  }

  var taxes = subtotal * 0.2;
  var shipping = 15;
  var total = subtotal + taxes + shipping;

  document.getElementById('subtotal').innerText = subtotal.toFixed(2);
  document.getElementById('taxes').innerText = taxes.toFixed(2);
  document.getElementById('shipping').innerText = shipping.toFixed(2);
  document.getElementById('total').innerText = total.toFixed(2);

  document.getElementById('facture-form').style.display = 'none';
  document.getElementById('facture').style.display = 'block';
}

function resetForm() {
  document.getElementById('facture-form').reset();
  items = [];
  renderItems();
  document.getElementById('facture-form').style.display = 'block';
  document.getElementById('facture').style.display = 'none';
}