/* Interaksi jQuery untuk prototipe Data Barang (data dummy di memori, hilang saat halaman dimuat ulang). */
$(function () {
    const modalForm = new bootstrap.Modal('#modalForm');
    const modalDetail = new bootstrap.Modal('#modalDetail');
    const modalHapus = new bootstrap.Modal('#modalHapus');
    let hapusId = null;

    DUMMY_KATEGORI.forEach(function (k) { $('#fKategori, #kategori').append($('<option>').val(k).text(k)); });
    DUMMY_LOKASI.forEach(function (l) { $('#lokasi').append($('<option>').val(l).text(l)); });

    function notif(msg, type) {
        $('#alertArea').html('<div class="alert alert-' + type + ' alert-dismissible fade show">' + esc(msg) +
            '<button type="button" class="btn-close" data-bs-dismiss="alert"></button></div>');
    }

    function render() {
        const q = $('#fSearch').val().trim().toLowerCase(), kat = $('#fKategori').val(), st = $('#fStatus').val();
        const rows = DUMMY_BARANG.filter(function (b) {
            const text = (b.kode + ' ' + b.nama + ' ' + b.kategori + ' ' + b.lokasi).toLowerCase();
            return (!q || text.indexOf(q) > -1) && (!kat || b.kategori === kat) && (st !== 'menipis' || menipis(b));
        });
        const $tb = $('#tbBarang').empty();
        if (!rows.length) $tb.append('<tr><td colspan="6" class="text-center text-muted py-4">Tidak ada barang yang cocok.</td></tr>');
        rows.forEach(function (b) {
            $tb.append('<tr><td>' + esc(b.kode) + '</td><td>' + esc(b.nama) + '</td><td>' + esc(b.kategori) + '</td><td>' + esc(b.lokasi || '-') +
                '</td><td class="text-end"><strong>' + b.stok + '</strong> ' + esc(b.satuan) + (menipis(b) ? ' <span class="badge bg-danger">Menipis</span>' : '') +
                '</td><td class="text-center text-nowrap">' +
                '<button class="btn btn-sm btn-info text-white btn-detail" data-id="' + b.id + '" title="Detail"><i class="bi bi-eye"></i></button> ' +
                '<button class="btn btn-sm btn-success btn-ubah" data-id="' + b.id + '" title="Ubah"><i class="bi bi-pencil"></i></button> ' +
                '<button class="btn btn-sm btn-danger btn-hapus" data-id="' + b.id + '" title="Hapus"><i class="bi bi-trash"></i></button></td></tr>');
        });
        $('#infoBarang').text('Menampilkan ' + rows.length + ' dari ' + DUMMY_BARANG.length + ' barang');
    }
    render();
    $('#fSearch').on('input', render);
    $('#fKategori, #fStatus').on('change', render);

    function find(id) { return DUMMY_BARANG.find(function (b) { return b.id === Number(id); }); }

    $('#btnTambah').on('click', function () {
        $('#formBarang')[0].reset(); $('#formBarang .is-invalid').removeClass('is-invalid');
        $('#barangId').val(''); $('#modalFormTitle').text('Tambah Barang'); modalForm.show();
    });

    $('#tbBarang').on('click', '.btn-ubah', function () {
        const b = find($(this).data('id'));
        $('#formBarang .is-invalid').removeClass('is-invalid');
        $('#barangId').val(b.id); $('#kode').val(b.kode); $('#nama').val(b.nama); $('#kategori').val(b.kategori);
        $('#lokasi').val(b.lokasi); $('#satuan').val(b.satuan); $('#stok').val(b.stok); $('#min').val(b.min);
        $('#modalFormTitle').text('Ubah Barang'); modalForm.show();
    });

    $('#tbBarang').on('click', '.btn-detail', function () {
        const b = find($(this).data('id'));
        $('#dKode').text(b.kode); $('#dNama').text(b.nama); $('#dKategori').text(b.kategori); $('#dLokasi').text(b.lokasi || '-');
        $('#dStok').text(b.stok + ' ' + b.satuan); $('#dMin').text(b.min + ' ' + b.satuan);
        modalDetail.show();
    });

    $('#formBarang').on('submit', function (e) {
        e.preventDefault();
        const id = $('#barangId').val();
        const kode = $('#kode').val().trim().toUpperCase();
        const dupe = DUMMY_BARANG.some(function (b) { return b.kode === kode && String(b.id) !== id; });
        const checks = {
            kode: /^[A-Z0-9\-_]{2,30}$/.test(kode) && !dupe,
            nama: $('#nama').val().trim() !== '',
            kategori: $('#kategori').val() !== '',
            satuan: $('#satuan').val().trim() !== '',
            stok: /^\d+$/.test($('#stok').val()),
            min: /^\d+$/.test($('#min').val())
        };
        let valid = true;
        Object.keys(checks).forEach(function (k) {
            $('#' + k).toggleClass('is-invalid', !checks[k]);
            if (!checks[k]) valid = false;
        });
        $('#kode').siblings('.invalid-feedback').text(dupe ? 'Kode barang sudah digunakan.' : 'Kode wajib diisi (huruf/angka/-/_).');
        if (!valid) return;

        const data = { kode: kode, nama: $('#nama').val().trim(), kategori: $('#kategori').val(), lokasi: $('#lokasi').val(),
            satuan: $('#satuan').val().trim(), stok: parseInt($('#stok').val(), 10), min: parseInt($('#min').val(), 10), ket: '' };
        if (id) { Object.assign(find(id), data); notif('Barang berhasil diubah (dummy).', 'success'); }
        else { data.id = Date.now(); DUMMY_BARANG.push(data); notif('Barang berhasil ditambahkan (dummy).', 'success'); }
        modalForm.hide(); render();
    });

    $('#tbBarang').on('click', '.btn-hapus', function () {
        hapusId = Number($(this).data('id'));
        $('#hapusNama').text(find(hapusId).nama); modalHapus.show();
    });
    $('#btnKonfirmasiHapus').on('click', function () {
        DUMMY_BARANG = DUMMY_BARANG.filter(function (b) { return b.id !== hapusId; });
        modalHapus.hide(); notif('Barang berhasil dihapus (dummy).', 'success'); render();
    });
});
