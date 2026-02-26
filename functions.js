/* ══════════════════════
   DATA
══════════════════════ */
const CATS=[
  {id:'coffee',label:'Hot Coffee'},
  {id:'cold',label:'Cold Brew & Iced',icon:`<svg width="16" height="16" fill="none" stroke="var(--accent)" stroke-width="1.8" stroke-linecap="round" viewBox="0 0 24 24"><path d="M8 2v4M16 2v4M3 10h18M5 6h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2z"/></svg>`},
  {id:'cake',label:'Signature Cakes',icon:`<svg width="16" height="16" fill="none" stroke="var(--accent)" stroke-width="1.8" stroke-linecap="round" viewBox="0 0 24 24"><path d="M20 21v-8a2 2 0 00-2-2H6a2 2 0 00-2 2v8"/><path d="M4 21h16M12 3v6M8 7l4-4 4 4"/></svg>`},
  {id:'pastry',label:'Cupcakes & Muffins',icon:`<svg width="16" height="16" fill="none" stroke="var(--accent)" stroke-width="1.8" stroke-linecap="round" viewBox="0 0 24 24"><path d="M12 2a5 5 0 015 5v1H7V7a5 5 0 015-5z"/><rect x="4" y="8" width="16" height="12" rx="2"/></svg>`},
  {id:'tea',label:'Specialty Teas',icon:`<svg width="16" height="16" fill="none" stroke="var(--accent)" stroke-width="1.8" stroke-linecap="round" viewBox="0 0 24 24"><path d="M17 8h2a2 2 0 010 4h-2"/><path d="M5 8h12v8a4 4 0 01-4 4H9a4 4 0 01-4-4V8z"/></svg>`},
];

const products=[
  {id:1,name:"Phoka Signature Espresso",cat:"coffee",price:45,desc:"Rich double shot with chocolate undertones",img:"https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?auto=format&fit=crop&w=600&q=85",badge:"popular",coffee:true},
  {id:2,name:"Caramel Cloud Latte",cat:"coffee",price:65,desc:"Smooth espresso with caramel & steamed oat milk",img:"https://images.unsplash.com/photo-1559496417-e7f25cb247f3?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",badge:"popular",coffee:true},
  {id:3,name:"Ethiopian Pour Over",cat:"coffee",price:70,desc:"Single origin, light roast, citrus & floral notes",img:"https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=85",coffee:true},
  {id:4,name:"Vanilla Bean Cappuccino",cat:"coffee",price:60,desc:"Classic cappuccino with Madagascar vanilla",img:"https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=600&q=85",coffee:true},
  {id:5,name:"Flat White",cat:"coffee",price:55,desc:"Velvety micro-foam espresso, Australian style",img:"https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=600&q=85",coffee:true},
  {id:6,name:"Cortado",cat:"coffee",price:50,desc:"Equal parts espresso & warm milk, balanced",img:"https://images.unsplash.com/photo-1559496417-e7f25cb247f3?auto=format&fit=crop&w=600&q=85",coffee:true},
  {id:7,name:"Cold Brew Original",cat:"cold",price:65,desc:"12-hour steeped, smooth & naturally sweet",img:"https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=600&q=85",badge:"popular"},
  {id:8,name:"Nitro Cold Brew",cat:"cold",price:75,desc:"Silky nitrogen-infused cold brew on tap",img:"https://images.unsplash.com/photo-1634462180358-b5949e4a0028?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",badge:"new"},
  {id:9,name:"Iced Brown Sugar Oat Latte",cat:"cold",price:72,desc:"Espresso over ice, oat milk & brown sugar syrup",img:"https://images.unsplash.com/photo-1630248904474-a7927610a5db?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
  {id:10,name:"Mango Cold Brew Tonic",cat:"cold",price:70,desc:"Cold brew + mango + sparkling tonic",img:"https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=600&q=85",badge:"new"},
  {id:11,name:"Triple Chocolate Cake",cat:"cake",price:180,desc:"Moist dark chocolate sponge, ganache frosting",img:"https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=85",badge:"popular"},
  {id:12,name:"Red Velvet Beauty",cat:"cake",price:165,desc:"Cream cheese frosting, crimson velvet layers",img:"https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?auto=format&fit=crop&w=600&q=85"},
  {id:13,name:"Lemon Drizzle Loaf",cat:"cake",price:140,desc:"Zesty lemon sponge with a tangy glaze",img:"https://images.unsplash.com/photo-1551404973-761c83cd8339?auto=format&fit=crop&w=600&q=85",badge:"new"},
  {id:14,name:"Carrot & Walnut Cake",cat:"cake",price:155,desc:"Spiced carrot cake, walnuts & cream cheese",img:"https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&w=600&q=85"},
  {id:15,name:"Salted Caramel Cupcake",cat:"pastry",price:55,desc:"Butter cupcake, salted caramel buttercream",img:"https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=600&q=85",badge:"popular"},
  {id:16,name:"Dark Choc Fudge Cupcake",cat:"pastry",price:55,desc:"Rich fudge centre, chocolate ganache top",img:"https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=600&q=85"},
  {id:17,name:"Blueberry Streusel Muffin",cat:"pastry",price:48,desc:"Juicy blueberries, crunchy streusel topping",img:"https://images.unsplash.com/photo-1550617931-e17a7b70dce2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",badge:"new"},
  {id:18,name:"Matcha White Choc Muffin",cat:"pastry",price:52,desc:"Japanese matcha with white chocolate chips",img:"https://images.unsplash.com/photo-1587668178277-295251f900ce?auto=format&fit=crop&w=600&q=85"},
  {id:19,name:"Masala Chai Latte",cat:"tea",price:58,desc:"Spiced chai, steamed oat milk, honey drizzle",img:"https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?auto=format&fit=crop&w=600&q=85",badge:"popular"},
  {id:20,name:"Ceremonial Matcha Latte",cat:"tea",price:72,desc:"Japanese grade matcha, frothed oat milk",img:"https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=600&q=85",badge:"new"},
  {id:21,name:"Moroccan Mint Tea",cat:"tea",price:42,desc:"Loose leaf mint, brewed in a traditional pot",img:"https://images.unsplash.com/photo-1579992357154-faf4bde95b3d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
  {id:22,name:"Hibiscus & Rose Iced Tea",cat:"tea",price:50,desc:"Floral & tart, served chilled with rose petals",img:"https://images.unsplash.com/photo-1579992357036-b19b591b7519?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
];

/* ══════════════════════
   STATE
══════════════════════ */
let cart=[];
let currentProduct=null;
let currentSugar=0;
let currentSizeExtra=0;
let currentCoffeeType='Black';
let currentQty=1;
let currentExtras=[];
let selectedBranch='Sandton Central';
let currentFilter='all';
let favourites=new Set();

/* ══════════════════════
   RENDER
══════════════════════ */
function renderMenu(){
  const content=document.getElementById('menuContent');
  const catsToShow=currentFilter==='all'?CATS.map(c=>c.id):[currentFilter];

  let html='';
  catsToShow.forEach(catId=>{
    const catInfo=CATS.find(c=>c.id===catId);
    const items=products.filter(p=>p.cat===catId);
    if(!items.length)return;
    html+=`
      <div class="category-group" id="cat-${catId}">
        <div class="category-group-header">
          
          <div class="cat-group-title">${catInfo.label}</div>
          <div class="cat-group-count">${items.length} items</div>
        </div>
        <div class="products-grid">
          ${items.map((p,i)=>productCardHTML(p,i)).join('')}
        </div>
      </div>
    `;
  });

  content.innerHTML=html||'<p style="color:var(--text-muted);padding:40px 0;">No items found.</p>';
  observeReveal();
}

function productCardHTML(p,i){
  const isFav=favourites.has(p.id);
  return `
    <div class="product-card reveal" data-delay="${(i%3)+1}" onclick="openOrderModal(${p.id})">
      <div class="product-img-wrap">
        <img src="${p.img}" alt="${p.name}" loading="lazy">
        <button class="fav-btn ${isFav?'active':''}" onclick="toggleFav(event,${p.id})" title="Add to favourites">
          <svg width="14" height="14" fill="${isFav?'var(--accent)':'none'}" stroke="${isFav?'var(--accent)':'currentColor'}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
          </svg>
        </button>
        <div class="quick-add" onclick="event.stopPropagation();openOrderModal(${p.id})">
          <svg width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg>
          Customise &amp; Add
        </div>
      </div>
      <div class="product-info">
        <div class="product-name">${p.name}</div>
        <div class="product-desc">${p.desc}</div>
        <div class="product-footer">
          <div class="product-price">R${p.price}<span> / S</span></div>
        </div>
      </div>
    </div>
  `;
}

function filterMenu(cat,btnEl){
  currentFilter=cat;
  // Update desktop sidebar
  document.querySelectorAll('.sidebar-filter').forEach(b=>b.classList.toggle('active',b.dataset.cat===cat));
  // Update mobile tabs
  document.querySelectorAll('.pkc-mobile-filter-tab').forEach(b=>{
    const match=(cat==='all'&&b.textContent.trim()==='All')||(b.getAttribute('onclick')&&b.getAttribute('onclick').includes(`'${cat}'`));
    b.classList.toggle('active',match);
  });
  if(btnEl){
    if(btnEl.classList.contains('pkc-mobile-filter-tab')){
      document.querySelectorAll('.pkc-mobile-filter-tab').forEach(b=>b.classList.remove('active'));
      btnEl.classList.add('active');
    }
  }
  renderMenu();
}

/* ══════════════════════
   FAVOURITES
══════════════════════ */
function toggleFav(e,id){
  e.stopPropagation();
  if(favourites.has(id)){
    favourites.delete(id);
    showToast('Removed from favourites');
  }else{
    favourites.add(id);
    showToast('Added to favourites ♥');
  }
  document.getElementById('pkc-fav-btn').classList.toggle('fav-active',favourites.size>0);
  renderMenu();
}
function toggleFavPanel(){
  openFavPanel();
}
function openFavPanel(){
  renderFavPanel();
  document.getElementById('favOverlay').classList.add('open');
  document.getElementById('pkc-page').classList.add('modal-open');
}
function closeFavPanel(){
  document.getElementById('favOverlay').classList.remove('open');
  document.getElementById('pkc-page').classList.remove('modal-open');
}
function closeFavPanelOnBg(e){if(e.target.id==='favOverlay')closeFavPanel();}
function renderFavPanel(){
  const body=document.getElementById('favPanelBody');
  if(!favourites.size){
    body.innerHTML=`<div class="fav-empty">
      <svg width="48" height="48" fill="none" stroke="var(--border)" stroke-width="1.5" stroke-linecap="round" viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
      <p>No favourites yet</p><small>Tap the ♥ on any item to save it here</small>
    </div>`;
    return;
  }
  const favItems=products.filter(p=>favourites.has(p.id));
  body.innerHTML=favItems.map(p=>`
    <div class="fav-item-row">
      <div class="fav-item-img"><img src="${p.img}" alt="${p.name}" loading="lazy"></div>
      <div class="fav-item-details">
        <div class="fav-item-name">${p.name}</div>
        <div class="fav-item-desc">${p.desc}</div>
        <div class="fav-item-price">R${p.price}</div>
        <button class="fav-remove-btn" onclick="removeFav(${p.id})">Remove</button>
      </div>
      <button class="fav-order-btn" onclick="closeFavPanel();openOrderModal(${p.id})">Order</button>
    </div>
  `).join('');
}
function removeFav(id){
  favourites.delete(id);
  document.getElementById('pkc-fav-btn').classList.toggle('fav-active',favourites.size>0);
  renderMenu();
  renderFavPanel();
  if(!favourites.size)showToast('No more favourites');
}

/* ══════════════════════
   ORDER MODAL
══════════════════════ */
function openOrderModal(id){
  currentProduct=products.find(p=>p.id===id);
  if(!currentProduct)return;
  currentSugar=0;currentSizeExtra=0;currentCoffeeType='Black';currentQty=1;currentExtras=[];
  // populate
  document.getElementById('orderModalPhoto').src=currentProduct.img;
  document.getElementById('orderModalName').textContent=currentProduct.name;
  document.getElementById('orderModalSub').textContent=currentProduct.desc;
  // reset options
  document.querySelectorAll('.size-btn').forEach((b,i)=>b.classList.toggle('selected',i===0));
  document.querySelectorAll('.coffee-type-option').forEach((b,i)=>b.classList.toggle('selected',i===0));
  document.querySelectorAll('.extra-option').forEach(b=>b.classList.remove('checked'));
  document.getElementById('sugarFill').style.width='0%';
  document.getElementById('sugarDisplay').textContent='No sugar';
  document.getElementById('qtyDisplay').textContent='1';
  document.getElementById('orderNotes').value='';
  // show/hide coffee options
  const isCoffee=currentProduct.coffee;
  document.getElementById('coffeeTypeSection').style.display=isCoffee?'':'none';
  document.getElementById('sugarSection').style.display=isCoffee?'':'none';
  document.getElementById('sizeSection').style.display=isCoffee?'':'none';
  // scroll to top
  document.getElementById('orderModalScroll').scrollTop=0;
  updateAddBtn();
  document.getElementById('orderOverlay').classList.add('open');
  document.getElementById('pkc-page').classList.add('modal-open');
}
function closeOrderModal(){
  document.getElementById('orderOverlay').classList.remove('open');
  document.getElementById('pkc-page').classList.remove('modal-open');
}
function closeOnBg(e,id){if(e.target.id===id)closeOrderModal();}

function selectSize(btn,s,extra){
  currentSizeExtra=extra;
  document.querySelectorAll('.size-btn').forEach(b=>b.classList.remove('selected'));
  btn.classList.add('selected');
  updateAddBtn();
}
function selectCoffeeType(el,type){
  currentCoffeeType=type;
  document.querySelectorAll('.coffee-type-option').forEach(b=>b.classList.remove('selected'));
  el.classList.add('selected');
}
function adjustSugar(d){
  currentSugar=Math.max(0,Math.min(5,currentSugar+d));
  document.getElementById('sugarFill').style.width=(currentSugar/5*100)+'%';
  document.getElementById('sugarDisplay').textContent=currentSugar===0?'No sugar':currentSugar===1?'1 tsp':currentSugar+' tsp';
}
function toggleExtra(el,name,price){
  el.classList.toggle('checked');
  if(el.classList.contains('checked')){currentExtras.push({name,price});}
  else{currentExtras=currentExtras.filter(e=>e.name!==name);}
  updateAddBtn();
}
function adjustQty(d){
  currentQty=Math.max(1,Math.min(20,currentQty+d));
  document.getElementById('qtyDisplay').textContent=currentQty;
  updateAddBtn();
}
function updateAddBtn(){
  if(!currentProduct)return;
  const base=currentProduct.price*(1+currentSizeExtra);
  const extras=currentExtras.reduce((s,e)=>s+e.price,0);
  const total=Math.round((base+extras)*currentQty);
  document.getElementById('addBtnPrice').textContent='R'+total;
}
function addToCart(){
  if(!currentProduct)return;
  const base=currentProduct.price*(1+currentSizeExtra);
  const extras=currentExtras.reduce((s,e)=>s+e.price,0);
  const itemPrice=Math.round((base+extras)*currentQty);
  const notes=document.getElementById('orderNotes').value.trim();
  const parts=[];
  if(currentProduct.coffee){
    const sizes={0:'Small',0.2:'Medium',0.4:'Large'};
    parts.push(sizes[currentSizeExtra]||'Small');
    parts.push(currentCoffeeType);
    parts.push(currentSugar===0?'No sugar':currentSugar+' tsp sugar');
  }
  currentExtras.forEach(e=>parts.push(e.name));
  if(notes)parts.push(notes);
  cart.push({
    id:Date.now()+Math.random(),
    productId:currentProduct.id,
    name:currentProduct.name,
    img:currentProduct.img,
    qty:currentQty,
    price:itemPrice,
    custom:parts.join(' · ')||'Standard'
  });
  closeOrderModal();
  updateCartUI();
  showToast(currentProduct.name+' added to your order');
}

/* ══════════════════════
   CART
══════════════════════ */
function openCart(){
  document.getElementById('cartOverlay').classList.add('open');
  document.getElementById('pkc-page').classList.add('modal-open');
}
function closeCart(){
  document.getElementById('cartOverlay').classList.remove('open');
  document.getElementById('pkc-page').classList.remove('modal-open');
}
function closeOnBg2(e,id){if(e.target.id===id)closeCart();}

function updateCartUI(){
  const count=cart.reduce((s,i)=>s+i.qty,0);
  const subtotal=cart.reduce((s,i)=>s+i.price,0);
  const total=subtotal+5;
  // Badges
  const hb=document.getElementById('headerCartBadge');
  hb.textContent=count;
  hb.style.display=count>0?'flex':'none';
  document.getElementById('cartBadge').textContent=count;
  document.getElementById('cartTotalLabel').textContent=count>0?'R'+total+' Order':'My Order';
  // Summary
  document.getElementById('cartSubtotal').textContent='R'+subtotal;
  document.getElementById('cartTotal').textContent='R'+total;
  document.getElementById('checkoutSubtotal').textContent='R'+subtotal;
  document.getElementById('checkoutTotal').textContent='R'+total;
  document.getElementById('cartSummary').style.display=cart.length?'block':'none';
  renderCartItems();
}
function renderCartItems(){
  const body=document.getElementById('cartBody');
  if(!cart.length){
    body.innerHTML=`<div class="cart-empty">
      <div class="cart-empty-icon">
        <svg width="52" height="52" fill="none" stroke="var(--border)" stroke-width="1.5" stroke-linecap="round" viewBox="0 0 24 24"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>
      </div>
      <p>Your order is empty</p><small>Add something delicious!</small>
    </div>`;
    return;
  }
  body.innerHTML=cart.map(item=>`
    <div class="cart-item-row">
      <div class="cart-item-img"><img src="${item.img}" alt="${item.name}" loading="lazy"></div>
      <div class="cart-item-details">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-customization">${item.custom}</div>
        <div class="cart-item-actions">
          <div class="cart-qty-ctrl">
            <button class="cart-qty-btn" onclick="changeCartQty(${item.id},-1)">−</button>
            <span class="cart-qty-num">${item.qty}</span>
            <button class="cart-qty-btn" onclick="changeCartQty(${item.id},1)">+</button>
          </div>
          <span class="cart-item-price">R${item.price}</span>
        </div>
        <button class="cart-remove" onclick="removeCartItem(${item.id})">Remove</button>
      </div>
    </div>
  `).join('');
}
function changeCartQty(id,d){
  const item=cart.find(i=>i.id===id);
  if(!item)return;
  const unit=item.price/item.qty;
  item.qty=Math.max(1,item.qty+d);
  item.price=Math.round(unit*item.qty);
  updateCartUI();
}
function removeCartItem(id){
  cart=cart.filter(i=>i.id!==id);
  updateCartUI();
}

/* ══════════════════════
   CHECKOUT
══════════════════════ */
function openCheckout(){
  if(!cart.length){showToast('Your order is empty!');return;}
  closeCart();
  document.getElementById('checkoutBranch').textContent=selectedBranch;
  document.getElementById('checkoutOverlay').classList.add('open');
  document.getElementById('pkc-page').classList.add('modal-open');
}
function closeCheckout(){
  document.getElementById('checkoutOverlay').classList.remove('open');
  document.getElementById('pkc-page').classList.remove('modal-open');
}
function closeOnBg3(e,id){if(e.target.id===id)closeCheckout();}
function selectPay(el){
  document.querySelectorAll('.pay-icon').forEach(p=>p.classList.remove('active'));
  el.classList.add('active');
}
function formatCard(el){
  let v=el.value.replace(/\D/g,'').substring(0,16);
  el.value=v.replace(/(.{4})/g,'$1 ').trim();
}
function formatExpiry(el){
  let v=el.value.replace(/[^0-9]/g,'');
  if(v.length>2)v=v.substring(0,2)+' / '+v.substring(2,4);
  el.value=v;
}
function placeOrder(){
  const name=document.getElementById('chkName').value.trim();
  if(!name){showToast('Please fill in your name');return;}
  closeCheckout();
  cart=[];
  updateCartUI();
  setTimeout(()=>showToast('Order placed! Ready in ~15 min at '+selectedBranch),300);
}

/* ══════════════════════
   BRANCH
══════════════════════ */
function selectBranch(branch){
  selectedBranch=branch;
  setBranchUI();
  showToast('Branch set to '+branch);
}
function selectBranchInCart(branch){
  selectedBranch=branch;
  setBranchUI();
}
function setBranchUI(){
  const n=document.getElementById('currentBranchName');
  n.innerHTML=selectedBranch+' <span class="loc-chevron"><svg width="12" height="12" fill="none" stroke="var(--text-muted)" stroke-width="2.5" stroke-linecap="round" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg></span>';
  document.getElementById('branchOpt1').classList.toggle('selected',selectedBranch==='Sandton Central');
  document.getElementById('branchOpt2').classList.toggle('selected',selectedBranch==='Rosebank Village');
}
function openBranchSelect(){
  document.getElementById('branchSelectOverlay').classList.add('open');
}
function closeBranchSelect(){
  document.getElementById('branchSelectOverlay').classList.remove('open');
}
function closeBranchSelectOnBg(e){if(e.target.id==='branchSelectOverlay')closeBranchSelect();}
function confirmBranchSelect(name,activeId,inactiveId){
  selectedBranch=name;
  document.getElementById(activeId).classList.add('selected');
  document.getElementById(inactiveId).classList.remove('selected');
  setBranchUI();
}

/* ══════════════════════
   VIDEO MODAL
══════════════════════ */
function openVideoModal(){
  document.getElementById('videoModalOverlay').classList.add('open');
  document.getElementById('pkc-page').classList.add('modal-open');
  // Real coffee shop video from YouTube
  document.getElementById('videoIframe').src='https://www.youtube.com/embed/mNBTFDsEFi0?autoplay=1&rel=0';
}
function closeVideoModal(){
  document.getElementById('videoModalOverlay').classList.remove('open');
  document.getElementById('pkc-page').classList.remove('modal-open');
  document.getElementById('videoIframe').src='';
}
function closeVideoOnBg(e){if(e.target.id==='videoModalOverlay')closeVideoModal();}

/* ══════════════════════
   MOBILE NAV
══════════════════════ */
function toggleMobileNav(){
  document.getElementById('pkc-mobile-nav').classList.toggle('open');
}

/* ══════════════════════
   HEADER SCROLL
══════════════════════ */
let lastScrollY=0;
window.addEventListener('scroll',()=>{
  const scrollY=window.scrollY;
  const header=document.getElementById('pkc-main-header');
  // Hide on scroll down, show on scroll up
  if(scrollY>lastScrollY&&scrollY>80){
    header.classList.add('hidden');
  }else{
    header.classList.remove('hidden');
  }
  lastScrollY=scrollY;
  // Scrolled shadow state
  header.classList.toggle('scrolled',scrollY>60);
  // Update mobile filter bar top to match header height
  const bar=document.getElementById('pkc-mobile-filter-bar');
  if(bar&&window.innerWidth<=900){
    const headerH=header.offsetHeight;
    bar.style.top=headerH+'px';
  }
  // Track active category on scroll (mobile)
  if(window.innerWidth<=900&&currentFilter==='all'){
    const cats=['coffee','cold','cake','pastry','tea'];
    let active='all';
    for(const cat of cats){
      const el=document.getElementById('cat-'+cat);
      if(!el)continue;
      const rect=el.getBoundingClientRect();
      if(rect.top<=160){active=cat;}
    }
    document.querySelectorAll('.pkc-mobile-filter-tab').forEach(b=>{
      const match=(active==='all'&&b.textContent.trim()==='All')||(b.getAttribute('onclick')&&b.getAttribute('onclick').includes(`'${active}'`));
      b.classList.toggle('active',match);
    });
    const activeTab=document.querySelector('.pkc-mobile-filter-tab.active');
    if(activeTab){activeTab.scrollIntoView({behavior:'smooth',block:'nearest',inline:'center'});}
  }
},{passive:true});

/* ══════════════════════
   TOAST
══════════════════════ */
let toastTimer;
function showToast(msg){
  const t=document.getElementById('toast');
  clearTimeout(toastTimer);
  t.textContent=msg;
  t.classList.add('show');
  toastTimer=setTimeout(()=>t.classList.remove('show'),3000);
}

/* ══════════════════════
   INTERSECTION OBSERVER
══════════════════════ */
let obs;
function observeReveal(){
  if(obs)obs.disconnect();
  obs=new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting)e.target.classList.add('visible');
    });
  },{threshold:0.12});
  document.querySelectorAll('.reveal,.reveal-left,.reveal-right,.reveal-scale').forEach(el=>obs.observe(el));
}

window.addEventListener('DOMContentLoaded',()=>{
  renderMenu();
  updateCartUI();
  setBranchUI();
  observeReveal();
  const track=document.getElementById('marqueeTrack');
  if(track){track.innerHTML+=track.innerHTML;}
});

/* ══════════════════════
   FOOTER ACCORDION
══════════════════════ */
function toggleFooterCol(headEl){
  if(window.innerWidth>768)return;
  const col=headEl.closest('.pkc-footer-col');
  const isOpen=col.classList.contains('open');
  // Close all
  document.querySelectorAll('.pkc-footer-col.open').forEach(c=>c.classList.remove('open'));
  // Open clicked if it was closed
  if(!isOpen)col.classList.add('open');
}