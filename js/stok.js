const tableBody = document.getElementById("stokTable");

function renderTable(data = dataBahanAjar){
    tableBody.innerHTML = "";
    let coverDefault = "img/no-image.png";
    data.forEach((item,index)=>{
        tableBody.innerHTML += `
            <tr>
                <td>
                    <img src="${item.cover}" alt="${item.namaBarang}" onerror="this.onerror=null; this.src='${coverDefault}'">
                </td>
                <td>${item.kodeLokasi}</td>
                <td>${item.kodeBarang}</td>
                <td>${item.namaBarang}</td>
                <td>${item.jenisBarang}</td>
                <td>${item.edisi}</td>
                <td>${item.stok}</td>
                <td>
                    <button onclick="hapusStok(${index})">Hapus</button>
                </td>
            </tr>
        `;
    });
}

function tambahStok(){
    const kode = document.getElementById("kodeBarang").value;
    const nama = document.getElementById("namaBarang").value;
    const stok = document.getElementById("stokBaru").value;

    if(!kode || !nama || !stok){
        alert("Semua field wajib diisi");
        return;
    }

    dataBahanAjar.push({
        kodeLokasi: "NEW001",
        kodeBarang: kode,
        namaBarang: nama,
        jenisBarang: "BMP",
        edisi: "1",
        stok: parseInt(stok),
        cover: "img/default.jpg"
    });

    renderTable();
    closeModal();

    alert("Stok berhasil ditambahkan");
}

function hapusStok(index){
    if(confirm("Yakin ingin menghapus data ini?")){
        dataBahanAjar.splice(index,1);
        renderTable();
    }
}

function searchBook(){
    const keyword = document.getElementById("searchInput").value.toLowerCase();

    const filtered = dataBahanAjar.filter(item =>
        item.namaBarang.toLowerCase().includes(keyword)
    );

    renderTable(filtered);
}

function openModal(){
    document.getElementById("modalTambah").style.display = "block";
}

function closeModal(){
    document.getElementById("modalTambah").style.display = "none";
}

renderTable();

function logout() {
    localStorage.removeItem("loggedUser");
    window.location.href = "login.html";
}