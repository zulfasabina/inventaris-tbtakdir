/* Data dummy (statis) untuk prototipe UTS. Bentuknya meniru data final di database. */
const DUMMY_KATEGORI = ['Semen & Perekat', 'Cat & Pelapis', 'Pipa & Fitting', 'Keramik & Lantai', 'Besi & Paku', 'Listrik'];
const DUMMY_LOKASI = ['Gudang A - Rak 1', 'Gudang A - Rak 2', 'Gudang B - Rak 1', 'Toko Depan - Etalase 1'];

let DUMMY_BARANG = [
    { id: 1, kode: 'BRG-0001', nama: 'Semen 50 kg',           kategori: 'Semen & Perekat',  lokasi: 'Gudang A - Rak 1',       satuan: 'sak',    stok: 120, min: 30,  ket: 'Data contoh' },
    { id: 2, kode: 'BRG-0002', nama: 'Cat Tembok Putih 5 kg', kategori: 'Cat & Pelapis',    lokasi: 'Gudang A - Rak 2',       satuan: 'kaleng', stok: 18,  min: 20,  ket: 'Data contoh' },
    { id: 3, kode: 'BRG-0003', nama: 'Pipa PVC 3 inci',       kategori: 'Pipa & Fitting',   lokasi: 'Gudang B - Rak 1',       satuan: 'batang', stok: 45,  min: 15,  ket: 'Data contoh' },
    { id: 4, kode: 'BRG-0004', nama: 'Keramik Lantai 40x40',  kategori: 'Keramik & Lantai', lokasi: 'Gudang B - Rak 1',       satuan: 'pcs',    stok: 250, min: 60,  ket: 'Data contoh' },
    { id: 5, kode: 'BRG-0005', nama: 'Paku 5 cm',             kategori: 'Besi & Paku',      lokasi: 'Toko Depan - Etalase 1', satuan: 'kg',     stok: 25,  min: 10,  ket: 'Data contoh' },
    { id: 6, kode: 'BRG-0006', nama: 'Kabel NYM 2x1,5',       kategori: 'Listrik',          lokasi: 'Toko Depan - Etalase 1', satuan: 'meter',  stok: 300, min: 100, ket: 'Data contoh' },
    { id: 7, kode: 'BRG-0007', nama: 'Cat Kayu Cokelat 1 kg', kategori: 'Cat & Pelapis',    lokasi: 'Gudang A - Rak 2',       satuan: 'kaleng', stok: 8,   min: 10,  ket: 'Data contoh' }
];

const DUMMY_RIWAYAT = [
    { waktu: '14/10/2026 09:15', barang: 'Cat Tembok Putih 5 kg', jenis: 'Kurangi', perubahan: -6,  oleh: 'Karyawan' },
    { waktu: '13/10/2026 15:40', barang: 'Semen 50 kg',           jenis: 'Tambah',  perubahan: 40,  oleh: 'Pemilik Toko' },
    { waktu: '13/10/2026 10:02', barang: 'Cat Kayu Cokelat 1 kg', jenis: 'Koreksi', perubahan: -2,  oleh: 'Karyawan' },
    { waktu: '12/10/2026 16:20', barang: 'Paku 5 cm',             jenis: 'Kurangi', perubahan: -5,  oleh: 'Karyawan' },
    { waktu: '12/10/2026 08:30', barang: 'Pipa PVC 3 inci',       jenis: 'Tambah',  perubahan: 20,  oleh: 'Pemilik Toko' }
];

function esc(v) {
    return String(v === null || v === undefined ? '' : v)
        .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}
function menipis(b) { return b.min > 0 && b.stok <= b.min; }
