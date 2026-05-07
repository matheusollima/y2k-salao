Add-Type -AssemblyName System.Drawing

$outputPath = Join-Path $PSScriptRoot '..\earth-drawing.png'
$outputPath = [System.IO.Path]::GetFullPath($outputPath)

$width = 1200
$height = 1200
$bitmap = New-Object System.Drawing.Bitmap($width, $height)
$graphics = [System.Drawing.Graphics]::FromImage($bitmap)
$graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$graphics.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit

try {
    $background = [System.Drawing.Color]::FromArgb(255, 7, 14, 34)
    $graphics.Clear($background)

    $starBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(220, 255, 250, 235))
    $softStarBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(120, 173, 216, 255))

    $stars = @(
        @(90, 110, 7), @(170, 340, 5), @(220, 950, 4), @(310, 150, 6),
        @(340, 810, 5), @(430, 420, 4), @(520, 220, 7), @(610, 920, 5),
        @(780, 120, 6), @(865, 300, 4), @(980, 880, 7), @(1040, 490, 5),
        @(1110, 180, 4), @(1040, 1020, 6), @(840, 1010, 5), @(150, 640, 6),
        @(560, 1030, 4), @(690, 520, 3), @(930, 620, 5), @(1020, 720, 4)
    )

    foreach ($star in $stars) {
        $graphics.FillEllipse($starBrush, $star[0], $star[1], $star[2], $star[2])
    }

    $softStars = @(
        @(120, 520, 14), @(260, 740, 11), @(470, 90, 12), @(720, 102, 10),
        @(890, 456, 12), @(1080, 820, 13), @(75, 900, 10), @(950, 150, 11)
    )

    foreach ($star in $softStars) {
        $graphics.FillEllipse($softStarBrush, $star[0], $star[1], $star[2], $star[2])
    }

    $earthBounds = New-Object System.Drawing.RectangleF(180, 180, 820, 820)
    $earthPath = New-Object System.Drawing.Drawing2D.GraphicsPath
    $earthPath.AddEllipse($earthBounds)

    $shadowBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(60, 0, 0, 0))
    $graphics.FillEllipse($shadowBrush, 205, 220, 820, 820)

    $glowPath = New-Object System.Drawing.Drawing2D.GraphicsPath
    $glowPath.AddEllipse(150, 150, 880, 880)
    $glowBrush = New-Object System.Drawing.Drawing2D.PathGradientBrush($glowPath)
    $glowBrush.CenterColor = [System.Drawing.Color]::FromArgb(40, 132, 211, 255)
    $glowBrush.SurroundColors = @([System.Drawing.Color]::FromArgb(0, 132, 211, 255))
    $graphics.FillPath($glowBrush, $glowPath)

    $oceanBrush = New-Object System.Drawing.Drawing2D.LinearGradientBrush(
        [System.Drawing.Point]::new(220, 220),
        [System.Drawing.Point]::new(900, 930),
        [System.Drawing.Color]::FromArgb(255, 32, 170, 231),
        [System.Drawing.Color]::FromArgb(255, 20, 55, 158)
    )
    $graphics.FillPath($oceanBrush, $earthPath)

    $graphics.SetClip($earthPath)

    $deepOceanBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(50, 0, 20, 90))
    $graphics.FillEllipse($deepOceanBrush, 190, 460, 720, 420)
    $graphics.FillEllipse($deepOceanBrush, 420, 180, 380, 280)

    $landBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 68, 189, 110))
    $landHighlightBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(180, 122, 219, 148))

    $continent1 = New-Object System.Drawing.Drawing2D.GraphicsPath
    $continent1.AddClosedCurve(@(
        [System.Drawing.Point]::new(390, 340),
        [System.Drawing.Point]::new(520, 280),
        [System.Drawing.Point]::new(620, 330),
        [System.Drawing.Point]::new(680, 450),
        [System.Drawing.Point]::new(630, 560),
        [System.Drawing.Point]::new(520, 600),
        [System.Drawing.Point]::new(420, 540),
        [System.Drawing.Point]::new(350, 460)
    ))

    $continent2 = New-Object System.Drawing.Drawing2D.GraphicsPath
    $continent2.AddClosedCurve(@(
        [System.Drawing.Point]::new(620, 610),
        [System.Drawing.Point]::new(730, 560),
        [System.Drawing.Point]::new(810, 620),
        [System.Drawing.Point]::new(830, 720),
        [System.Drawing.Point]::new(760, 800),
        [System.Drawing.Point]::new(660, 790),
        [System.Drawing.Point]::new(590, 710)
    ))

    $continent3 = New-Object System.Drawing.Drawing2D.GraphicsPath
    $continent3.AddClosedCurve(@(
        [System.Drawing.Point]::new(280, 610),
        [System.Drawing.Point]::new(360, 580),
        [System.Drawing.Point]::new(420, 650),
        [System.Drawing.Point]::new(405, 730),
        [System.Drawing.Point]::new(320, 770),
        [System.Drawing.Point]::new(250, 720)
    ))

    $graphics.FillPath($landBrush, $continent1)
    $graphics.FillPath($landBrush, $continent2)
    $graphics.FillPath($landBrush, $continent3)

    $graphics.FillEllipse($landHighlightBrush, 455, 330, 150, 85)
    $graphics.FillEllipse($landHighlightBrush, 635, 625, 125, 75)
    $graphics.FillEllipse($landHighlightBrush, 300, 635, 95, 55)

    $cloudBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(110, 255, 255, 255))
    $graphics.FillEllipse($cloudBrush, 285, 360, 210, 70)
    $graphics.FillEllipse($cloudBrush, 350, 385, 240, 75)
    $graphics.FillEllipse($cloudBrush, 565, 500, 255, 80)
    $graphics.FillEllipse($cloudBrush, 505, 735, 240, 70)
    $graphics.FillEllipse($cloudBrush, 250, 690, 150, 52)

    $graphics.ResetClip()

    $shineBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(45, 255, 255, 255))
    $graphics.FillEllipse($shineBrush, 270, 220, 260, 600)

    $rimPen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(210, 215, 245, 255), 8)
    $graphics.DrawEllipse($rimPen, $earthBounds)

    $moonBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 227, 230, 240))
    $moonShadeBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(55, 80, 90, 120))
    $graphics.FillEllipse($moonBrush, 900, 125, 120, 120)
    $graphics.FillEllipse($moonShadeBrush, 945, 145, 65, 92)
    $graphics.FillEllipse($moonShadeBrush, 930, 172, 18, 18)
    $graphics.FillEllipse($moonShadeBrush, 975, 205, 22, 22)

    $bitmap.Save($outputPath, [System.Drawing.Imaging.ImageFormat]::Png)
    Write-Output $outputPath
}
finally {
    foreach ($object in @(
        $rimPen, $shineBrush, $cloudBrush, $landHighlightBrush, $landBrush,
        $continent1, $continent2, $continent3, $deepOceanBrush, $oceanBrush,
        $glowBrush, $glowPath, $shadowBrush, $earthPath, $softStarBrush,
        $starBrush, $graphics, $bitmap
    )) {
        if ($null -ne $object) {
            $object.Dispose()
        }
    }
}
