SELECT 
  t1.`Kode Mk`, 
  t1.`Nama Mk`, 
  COUNT(DISTINCT t2.`Nim`) AS `Jumlah Mahasiswa`, 
  ROUND(AVG(CASE WHEN t2.`Umur` > 20 AND t2.`Umur` < 22 THEN t3.`Nilai Angka` END), 2) AS `Nilai Rata-rata`, 
  ROUND(STDDEV(CASE WHEN t2.`Umur` > 20 AND t2.`Umur` < 22 THEN t3.`Nilai Angka` END), 2) AS `Simpangan Rata-rata`
FROM 
  `nilai_mk` AS t1 
  JOIN `nilai_mahasiswa` AS t2 ON t1.`Nim` = t2.`Nim`
  JOIN `nilai_mk` AS t3 ON t1.`Kode Mk` = t3.`Kode Mk` AND t2.`Nim` = t3.`Nim`
WHERE 
  t3.`Nilai Huruf` IN ('A', 'B')
GROUP BY 
  t1.`Kode Mk`
    
    