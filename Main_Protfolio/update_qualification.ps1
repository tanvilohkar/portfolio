$content = Get-Content 'c:\Users\Manmath\Desktop\protfolio\index.html' -Raw

# Update Higher Secondary Education (Science) with 2024
$content = $content -replace '(?s)(<span class="qualification-subtitle">Higher Secondary Education \(Science\)</span>\s*)<div class="qualification-calendar">.*?</div>', '$1<div class="qualification-calendar">2024</div>'

# Update Primary & Secondary Education with 2022  
$content = $content -replace '(?s)(<span class="qualification-subtitle">Primary & Secondary Education</span>\s*)<div class="qualification-calendar">.*?</div>', '$1<div class="qualification-calendar">2022</div>'

$content | Set-Content 'c:\Users\Manmath\Desktop\protfolio\index.html'
