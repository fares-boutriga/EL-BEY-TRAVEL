import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import Rating from '@mui/material/Rating';

export default function OneHotel() {
  return (
    <Box
      sx={{
        width: '100%',
        position: 'relative',
        overflow: { xs: 'auto', sm: 'initial' },
      }} 
    >
      <Box
        sx={{
          position: 'absolute',
          display: 'block',
          width: '1px',
          bgcolor: 'warning.300',
          left: '500px',
          top: '-24px',
          bottom: '-24px',
          '&::before': {
            top: '4px',
            content: '"vertical"',
            display: 'block',
            position: 'absolute',
            right: '0.5rem',
            color: 'text.tertiary',
            fontSize: 'sm',
            fontWeight: 'lg',
          },
          '&::after': {
            top: '4px',
            content: '"horizontal"',
            display: 'block',
            position: 'absolute',
            left: '0.5rem',
            color: 'text.tertiary',
            fontSize: 'sm',
            fontWeight: 'lg',
          },
        }}
      />
      <Card
        orientation="horizontal"
        sx={{
          width: '100%',
          flexWrap: 'wrap',
          [`& > *`]: {
            '--stack-point': '500px',
            minWidth:
              'clamp(0px, (calc(var(--stack-point) - 2 * var(--Card-padding) - 2 * var(--variant-borderWidth, 0px)) + 1px - 100%) * 999, 100%)',
          },
          // make the card resizable for demo
          overflow: 'auto',
          resize: 'horizontal',
        }}
      >
        <AspectRatio flex ratio="1" maxHeight={182} sx={{ minWidth: 182 }}>
          <img
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBQVFBcUFBQXFxcYGxoYGxoaGxsYGBsbGhoaGxcYGxwbICwkGx0qIBcbJjYlKS4wMzMzGyI5PjkyPSwyMzABCwsLEA4QHRISHjMqIik1MzQyMjUyMjI0MjIyNDIyNDIyMjIyMjIyMjI0MjIyMjIyMjIyMjIyMjIyMjIyMjIyMv/AABEIALEBHAMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAFAAIDBAYBB//EAEMQAAIBAgQCBwQHBQcEAwAAAAECEQADBBIhMQVBEyIyUWFxgQaRobEUI0JScsHRFTNi4fAkQ4KSorLxFlNzwjST0v/EABoBAAMBAQEBAAAAAAAAAAAAAAABAwIEBQb/xAAtEQACAgEDAgMIAwEBAAAAAAAAAQIRAxIhMQRBE1GRBSIyQmFxgaEUM7HRUv/aAAwDAQACEQMRAD8A3wNdmmzSmqGB810UwGuzQA+a7NMzUpoND5pZqZNKaAJM1LNUeauzQZHzSmmTSmgY+aU03NSmgQ6a7NNzUpoAdNKaZNcmgB80ppk0poAfNKabmrk0Gh5rlcmlNAHRTqZNdmgB1NpTSmgDop1MmuzQA6aVNmlNKgHzSmmTSmigJAadNRA13NSApzSmos1LNVCdks0ukqKa7NKgskz0g9R10GmFj2euZ6aTXKBjw9OFyowKcDQA/NXc1R5qWagVkuakXqOaaWpUFj+kpG7UJWkFooLJOkroNR10NTGSg06aiDV2aATJM1LNUJeug0qCyWa7NRA0s9IdkualmqFnpuenQrLGalmqvmNOz0UFk013NUGeuF6KHZYzUs1Qhq7moodk00pqA3K50lFBZPmrs1App2akMqA0pqINTs1bJjwa7NMzUpoAkmkTTM1LNQA6acDUeakGoAkmmkmuTSzUGTop00zNVXHY9bShn2JA+f6Um6Vs0ty7NLNVTDYtLgDKdDVjNQmnuhPY6WpZ6bmodxtGexcCE5spIjfTWPWI9aG6VguSy2Ot9J0ZcZzsvM6TPlAPuqxavKwlTIkifEaGsDicSzX7r2+24VV71VlXbxyyNPvVruFYZraAM5JjaeqvgI/r4zCGVzk1RSUVFWFA1dLVEGruaugnY4U4Go81LNQMkLVymZqWagB812ajzUs1AEk12aizUs1AEldmos1LNQFkk12aizV2aAscacKjmlNIZMDXZqENTs1AWBuEWnS0ouRmjYRp4eJ7z41eBoNiccz25UZXGoG4YRBB75kx5CgHCsXiM0dbKGJOoE6nQsfUc96lrUUkk6Y9Opu2tjczSmqKcRSBOh7hqPfpUWJ4xbtiTO4H9a+dWeytk1JN0gjcuhQSTAGpqCzjUcSrAjlynlIncSYnvoDxrGKbNwWySHYEad5GYDwJEz4ms79FuW0Fy56KTJnSJEabk+lQnlkpUltVlIwi1uz0ZLwMgEGDB8DEx7qfNYvhWJCFc7nMJgRmAnUkgMACZM771p3xqRo0EjSQeY0mtYcnidhZIqHLL2almrI/tLEG6sggKMrQTlPWPW2O4A5e6tCuPSNW19YrcJa21XBidRq2XZoRx60LnRWzHWuAbwdFJMegNXPp1v73zqriMTbNy0Z7LMdtuow/OnkhqjQQmk7L+Gw62wAoiPfU01T/AGhbmM4n9dqccZb+8KcY0qQnLu2WC1RX7uUZj2Qet4A6T6GPSaCe0OMPRnIZUiGyyGUyMreImJ/nVThLNcMM627eRVLMYLKqs7ondmysWbeAAKlky6XpaKQjqVoq28atvEXR0SsytkTcBFQlVJ79APnWlw/FbbHeBJCkkQ2XtMO5e4mJms0MFnuXrgJEZWVWBBclZIbuJB2Peah4Rh7haWjVjmLzlGUmBHPXl5TtXLCc4vbhvYtKKfPJu1auzVHDXgo61zOfIKB4KANB5zUgxds7MK71fkctrzLU0prP/ttjee2qhkXTeDoOs0nYCQNqILxK3DEuBkOVvMd3fWFki73NuLQQz0pqi2Pt5Q2cQYOumk6n0191Q4fjFpxOeIAmdBJ5DvI509cfMNLCualmqqMUn3hXfpKfeFbozqRZzV3NVb6Sn3hXDik+8KKC0Ws1dmqoxKfeFOGJT7wooLRYmlNQfSF+8Kq47HBAhBHWuIp8maDSew0wjmruagGG46DmzxJuNbtgcwCqgn1LGe4Gra8YtdY5uqpAzcjJgx3gczWFki+GacWgqGrs0O/adqWGcSoJPkACT5a1D+3bH3j7qHkiuWCi32M/jMd0ThImQseQ/Xaqr3z0TIDLGWBMaHNJFW+NYVGe0zMBqV0103Hx+dUruBuC3bbPbHSBgozEkkEAAhQSmpG8TXJllJSaTK4oJxVoscLe4+8mNCTsAOQE9Zj38qs4yyrXLSsObGDtoP8AiiTYNbFoNduo0HKShZwGyzl0QgHcweVG/Z/F2SDbVlZpzCYkggDSQDpGojmO+tqaUabsz4Lc7qjIcYssbYiV1B23EGI9YpnE7eaygJk9T1MbeBmtdgfaS07MlxMhDOJIUKAuZtSTuAsGBuR31JiuNWFJHRswEHMtvMnaCwCNzJ2337qzLMpX9VRuOCkvo7Mf7NcLxFwTlXLpyWetsZJkDnz2o7jeB317KC51RGVlEkKNOsQR60dfEdGjsiLIAgdkGJ0kDSqntB7R28IUFxHbOoPUKaacwzCNjThNwVRFPCpu2BMH7N4nI1xwpYgAqCJEbc4PaO33ffPY4LcYQTlYyApR5MCe1GVZiNTvWmw3E1+iC/kfKyC5l6ucKRm74mD31zhXErd5+oG0UNrA322J13pxyySpMUumhJ20ZZ+EXlJU22kaaCR7xpXbfA7rMrFSqANLFSYOkdVQWPu51pOI8es2zc6QsvRwW016xhYAMnblVrhfFrTWGxC5mt9oQrFiNtFiSfCKbzyl3EumhHzMLhvZ90dmM3CSSGCuB1vBgCDy2q9h+DXHaCVTSZbTnEADWd/dWztcetMARbvCdetadT7iKZc9o7Y/u758RbMfE0o5JRVJocsEZO2mDcBwW0klfrGAkswGg8BMD51lUwJu37CtBUG7mjRfq7zrr/hIH+IVurPHLbMzFbiKAq9dYkswAjXy3isrwvjg+lC2miub7q0SYuuLgETyye8mo5ZOVWy0IqKpIXB8RZt3ce9yIa5lOhYMBmjSqPBcLbu2ltm5lvDrAnRWmW6vcQZHdtpVXENby4q5cLdIb1xUAcqoaWzOwB1is3ZxN0npFLRayDNMDqlQseIke/WpeJJPYpKEZbMO4trjRbUANcITSSyyJbwB7Q9Ku3LItW2hSSiyEAOZiOQ03NG/ZbC25OIBzMS8D7maM2h2PVij2J4oqGDbunxS2zj/AEA10Qyz5bIS6eFVR5jxrDOgDhSupXMQozC4ozMOsTlkgax8aCWcQxXLqWZyx+I9TqfhXpvEuPYW8lyyxuTEEdHclSNVYgLIgwZ8Kx/BeF2XvNca44tq/VVUZ2K6kHqyRuNT/MQnbLKK7HLuEudE7sjHYsRJhQGgCNFUZSAT2iCdhJdwrg154udFC6AFgSons6cz47c+6tnx/H2bWEIRGKXGRDocx1lmMcyqlfUDYRWm4fjEdgFBAgjWNwdRoTtqPStRStGZJ0ee4zC3LYAt23djBkhoAZQwJkCDqBGms1UTg2Ka4zsroQYUZS4idQMpjlvzr17mfIfnUeeSRB0IHhqAZHvrobk+WQUEjy8FZYMcpUw06QQTO+0RNDeP5ugFy2ZCsCY7pBkeoHoTUnH7ATF3WuMQjOzKMpluu0gTpAJ3Jjbvqjd4oMlxAkZgcpLE7wCDEDXUzyJ2rPjSkmmC6dJ6kL2fN+51pi3OpPPXUDx13rRdF50/DuCgKFSI+zEfyqLF463aE3LirpsTq3kBqfSujEmlSdkMtN29hz2JBGsER3e4jagmPZxbNtiS9p7bA83TNKt58jHMURwHG7N64tpGOZiYlSBoCx1O2gNaW/hLdsKy21nMusa+ckTRltbM1iinujzK1auPcMKzBczQNCcxOg9599SPZxDp2XlUKlcsBlBkgeQiB4e/0HjyD6O426vL8QH51iOGv9avixP+j+VSx9OpRbvgpLK4ySrkhS3cVCvWlwJAEDq95303PiauYfB3MvZNavC4PpGs3NMqKwAA1JNx/QDWn4nNI1O3f4mud4L7l9R5olxr1zV+sJJz3ETUSY+sYDlsK1v7FDWVuG9aUpAgXbZEkk6vsPAfGsXdwNwMSbDgtPaVzMghhG3fUxxZ+iJbSApvPmSBEhVK6bgzm99Zjb3SbC65NH7VcSuKLbh1trcKMEQW7qHKHGbMJnNA2+740vZXG3EuG0WF12Ww1qFCZSVLwTAkZLsGTyPfQHiGKa7btIbfUtKqKRmMlQ3P/GdPKn4NcXbuLetYe5nUKFbo3ZQEQIuh0PVArTbS3TNKSfASxrdLibhAABL3J1ygqC1zlJ1WfUVLwziUAsjdIqA9okqpLDQKG7idDyFCsPbxDTltuXl1uKF1AcakA7TNU7dxUOQMFJIJy5lBI7MwddD8ag0ou63NuVGzw3tCzrdNyCoCxlXYlo5TprTOO8Rt42Qi/uXe0c32igXrDw1O9ZFbrS2VpJ1K7D0A31AMVtuBcDbo890lbjubpAjtNElgRucomDtpVYT1bGeTW4+0Ewxt7BbZX3JFDPYhGy3HYEdhYMHsqTyJ+8KmxuHu3FYNeMEGYVNufKo+HYe7aQ20uAiZJKCZgDkRyArd7hQG9sutcuKttnZltgEQQvWB0AE7bie71I8Edl4eqZCpzKpBmdLgBbbnE1Vx/DbjuXZ1JMT1CNhA2fyqXDPct20tsbYQOGZoYaF8xiWgd2tCbewOINHGMSl24jIwRLqop16yNmYnTXQgL5Hv1qzd4tiRcuR0mW3cuIVElsiFgpEGesACPOqXF8RbNx0Rkf6wMcuYlSEGhAO+tTY9G+kYiFLTcuaBWOhDjlTZmi8+MuX7V5GUqptPcTOpFxSCpSSdQR3VkMO7WHtmCzKpkHSZOYg93bNa9Xy27q6g/R7vKIICxPjtWLx+IzLnbMWyCeRztbg+4/KsS5NxQ7DI91bpAkkNcjaQGByg+f50PfE3Ldr6OAoR2V80MGlDlAOoBG5giQa0nsfYtlrjsWGW0VEGO0ZnTwDa7a1QxeS5bulCTcyWrrAa65uuRGgG5rMVu2Jqgr7L429aezaTI6XXcuYMqEtykZSAJyxqDzqccZxd04u2y2wtvMFKBw8BmEElzEgRIjfSKZ7KYR+nsu1t4h5fKQn7txvMeFXMBZVXxLuuQXWMZ4XNPSHm36b1q9jVblXgmMxIs3ZsWraIiFMlt1DDOguE5mJbq5tarewdy5bbow0hwyqToWZUBiG+6SP/ALKOJYH0e4FKfu8oykQJaR9rvmNdxWW4VePRLcW4im3czqSDAOVM3htlMR9nelyHCY/jXH7j33QPKrcBVTGUZABm9SCfWtL7M8Xv3mZ2ZLdsGXuEKqopGotrtOrEs0xv55HGYk3bVi3kRFBcm4qjPAZlbeJnKd9JI2otwDja27iYXo0e0+YI5OrLlLdcEQX0gjTyiK1jwuT1J7IlPKlt5npX/UmCk/2uzy/vEPf3Gqtz2twK5icSkT9nM3IbZQap3jYvAC7aR40GZQY8FYagUPxOBwquFt4ZOUtppPdpO2u9dq8Kt7OZrIntVAj2u9o8LibYt2nZmlgGysirmUqGYsAQASCYB2oWfZa5mSMVaZurnt9IitmEm4imCNhuRO+lU+P8OS4xu279oBZV0VjICTLqHy5+7TfSDVP2X+iC8ekMkR0ZcBFYgndZOVtokn377n0+PTqjarlUZx9RPVplTvg13DeDsi3NFtEloObpQgk5ROzkcj46xtXm/Fhct3GF0kvzYnNm8QeYrfcQ4jcugqhyIBv+lZ8PlYsiIG2LgSSZMNLSZgRvU8OV40by4VkYzhnDEAS6nShhBBYlGB2MDQfMHvou73GJgliAZztIaWUL1UAAgT6mgOK4jkOUuzXDACA6a7FjOg+NXrPCb5sXLty42W5nRFGYkBGzdITyP1Z5HQye6pyyanb/AGWWNQVIvftbF5nW4VdRbdhL3CCwBIVgQQR2fd7hA4pfDwLdkKu5VBIEbCVifAExzp/C+BsGuE3HfMj28p1BDCSZOkwCIAP5VetYZAzPpzgRoCSZ8zP9d2dTCkEbGKuKUzXOjUheqogKWEktA1MyYHf6UxsVeJJVzE/d+em9Mw9k3XUEhVZlUTBzGD1VHfGvgPjfxHA8Rm6roANAEvBV90iT4xU5Nrg0lZzGe0FsHrYXEEkwJIUk+YJ76qXONp0ZvDB3DmJRpvONFywez3+Hf3mouP4rLdtLMZet6nQVKoXolti4CGLEerAn5V2vDGLqjy11OWV7nP8AqZlQOuGADQkG45O2k9Uchv4VNh+OYi6RkwtoyAZZmO+0mrNjCDowjRvPwipVyW4kheWpj51p4YUJZsrdWzMY3jFxGuoVS3cvEqxEnJlEQmvpJneswmEcIXMAakzyggDlz5eVE/aVwboZWEF3iDIPZ2M+PxqpiMUtu3C6udTzyj+f5HvrzMl6qR6kVatkaZmdVAIYwNtddK3GK43jbS5YtEgxOSQVAEHfeZrMcIwpUrdJhgdFbKRzBJBMzufjR7EcQusCXyiVJEZdG5AgGY089aeLJjg9zM8GSS910bLGYthZ6QRJSdu8VW4BxJ7obpAsiOUcqDJxa4bYtxnEEZ1RhHVGXnyMzvt41zheMuWYLqbkgTlGXlv1jAqsckJJ0v0YnDJBptqvuXuNcYu22IQJA71n86tYPiNxrId1Qn8MfCaC4zFC4S0BZ/iUxRPAlWwtzKZKEax3nSulQi43T9KOTxpqTWpP7OyhiuMMLhRbdqJAEq3rs1Q4riK9Iw6C0QDoSHze8P41UvMelJj7Yjy2rmNb6253ZmHuP8qosMPIg+qy77mi4djMO8vdOUgGQi3PKcxcg6AcqsLxTh0E9O4GgnLc7jp2N9KzmGINu6Tyts3uIH5ig9ph0TkmBmQ76dl/0rLwp92bXW5FtSZvrePwbIxt3bj5Y0ysNYaBLKBrBrP8V4hYuI5yXek6MqCYy76SA8HfuqtwC4hsvJAMk7iSFSdOZ0aagxNo9GxjkPmKxLHFJ2y0Opyya2W/Ic4LirGS2jNcVwusA5dZO48DU/0nBGQW270uf/mhXCrcsk81/KuCwMzUR6aMkr8gn1uSMmkly0GUuYTKSlzbXs3ANNRoVg1luFJbTBXbj6uQ0LG8KMuoHeToTRF1y2rh7lb5GhRP9h03Lgef1g/IVOeGMHS8my+LqZzjbXdIP+zFu2cPazMwYhjkCsxIztPZU6GfgPU+/BgyrlU5YYQcwnQkCG8T+VZ7hnE2tWLSLcKwmoWBqCVJgL31DxPjmJyg27l3tIugMQzQ06Dw1G1YjBOqZZzau0arDcIC20DKysEXMVLEyAJkAEMfQ1kOIcJfpXuYfFZg5Ba2RcXNMBwTGWCJ103qHB2sbcvNcu4u5atLcKqtzpDnUtlUBRAIIMA5t48K1+GwmELC2brsx+woK987LI2PPlW9TxPZmUllW6Mk/DsDmjpWstMZWbqSOQLgk/5qmX2SD6pibT93VA8tc9HuNeweFxBVjcuoVGUZWUgjxDKSTpVQewboirbvmAIGdYMchKz8qoutyJJJv8ok+ixybtejoHP7IYoDqXLccvrGX4AaVAgXA5vpqrd6XVMkXHUrOYkvlgHMOZ15b0df2NuBUC3GOrZytwqYJASJHJSx5agb0DfhqB7guWzca2jAZyDlIVWkTPNiPEjwpy6hy2lTX0W4R6dQ3haf1ewH4hwcOq37YK5isB+3BICs2pzOZWTPIcySdBjsc3QpbECEK6TsxWY8TB18TtVHjuIbRFBgkAypmRqokmPHl86qYvGHK2oLQQANdFOkjWdBPdpUpKN2ikNaW7CWCxmUT3MxGxOq+XjVSwmWGZiqhu/KzMvWAXu755DxgGxw17CYe5cuXHN1GMAkkTLBEggiGAJ/4oMjG5cd2ZiGDAAlR0YbNlA21AYgGOe1YckisYNhrB3Xe6TCwluQpEhMwVRlMHTVpJ85kUQu8WvIYZzO+y+Q+z3Cs7hMWyOXa4yyEBAhlIECIjuG8j50UGOt/fPmQknxOv8AXLSKIyx17y3MTx5L910iz+zjfhwpYlRsC0H0q6nB8SoCjCzlnK+e3rzPULAjX5VqbXHsOQCpMcoUj8qafaC0NMrn0AHzrollnLbScUMGKPvKf+Myb8F4gSTDBZJA+r2mQOrcHht3UOXheItMTc6QZ9Dmtsy6dmCbhGm8Ga2t32iP2LfvP5AfnQvGcRuXO2dBqFGg/n60Qwa378VX3YZOq0KseR39l/wy2JbDABLuVmU7hMpB8gdIqs2LwiiArkeo+MVS4pbJu3WjQO0+/SqZGlWXSYl2/wBOKXX52/if6D/D+guNFu2gbkHLEmBuBsaM/QyBo4Xvyoqj4Vm/Z3G4ezcz37TXIjKVaMp1nqyA0g8zyr1LDcVw4Ayrl/wR8qUqxv3YeiKYk8y9/J+GzMJwsspk3WPfrA07h3b03DcNtplFwZzzL8/Sth+2bE6sf8rH8qc3HbP8R/w/rFTWecttLLvpMUaeozDqknKijyUD5UVwNgNbI6ROt9nQt7jFR8R4jZcHLahvvGFI8erv76EOwiraXKPFEtcIS819Axd4Em5FxjvoAPyNVX4Nakno3Jnv/QVSt3CNiR5GKnXFXOVx/wDMf1rHg5O0iiz4e8SDGcIuEMtq04VlynQHczu5EjQbeNDbHsddyDPbc9aQhFvdcwDEG5EdYmDPKRFai1xu8BByt4ka/CqOB9rLtxwBbtxBJ7QIALCe1t1fjyqMoZlzwWjk6du0t/sDP2aMJauKLd1mcOzXHAIlhqZHLqjTSgtrDvcYAa7kSdNidSBMjlpzPgK2Vn2tuMLp6O2TbZlgMdcvidj4a0Gv+2KuT/ZLYY/bzSR4xkGYevOsPDKT3X7N/wArDFbOvwWcBYNs5rkNGxBII05gjXerFzBpDZJBMwTrEH+VR8P4qbgJNm2F7yGBP+r8qI/TkIg2yPJgfgVqqhOKpJ+olkwyduvQz+J4eWEOQV577cyQImrj+yFg2ixcsQvSKFZ16sSCyOTGnuq9iLtjKxZmUAEmUJEASeyTPupmHw9u6Bcs3EuaZQyxmygZcuoDARpFQyKXzL9HVjnje0WZPC3kFsZZQ2yUYZ27JYtOh11577U+7xndFnLGpO8KQ3OdyoHrVX2hwhsXW07ak6jnuY91Drak8piJ5z4RXE5yjsmUai3uguOPtcfo+jW6piVZQ1tYMqOWYjL47d9HMP7S4hIUWbSqIGltgInlDxQ7BI1pRcbKHyjqkFQqjkjIOrynQ+7avd4jcdiqW7RdpI+sJ3nrEBQY05xXRFykhaVE0uN9qr1uCbdvUR9rcbgRy15+NQXvbS70YPRJqzKes47IQyCII7VZPEYI3YZsRaGa7dJcuWKqwtwluBExGvKd9TJ1OHYe1ZUBlyqWJJYH7KS2ckeFOUUgjJssYfj/ANZcLvcgqwVC7OAdIjMx7jv30MbFgLbH3FIMACfjTsNhUuMciuLcaOZGY/wqRqu+pjlE0rnAySIuiOYIgn1B0oTrkdXwDMdiXuO7Ihg7mQQNNQP6/SoLiFQZQsGLAyM0gRvuBO9aD9lXFAC5YHoI7hvFOGEfaOfJvAeXdRqQ9AFKZsNdYLB6W2dNPs3etpGmtDeibTRW883xnN31tBh2Fp1IOr29wTyedpoVc4VrI05xpv31hy8jSiA1LHs217uoQOcEb6n0qDKP+2/odKLcCwmYWjHaN0nfUBv1Ioxd4ZtlVIj738qLXcdFrhiFbYBogw+rB/ib5L+lSPisKo6yMi7E5tF8W1MAczy5wJqK/dglOjEA5geknTUA/uj7p3516j6qDpnhx6HJFUREVyKsxYMRiEBM9VsoYEbgjNoQdDT7WCzCUuW2HeCfdoCJ9aqs8H3IS6XKuxmcLZDviEbYsfnpQhuFXAYgwfCtZh+C3VuXScmV2zCHE8++Kt3MBd0hBHfmT9a14sH3Xqcz6XL5P0Mxg+BnP1thWiApty4qLmZgAIkyDvp7vHlXXkEggiPKjxIea9TcennHs/QsWNn8F/8AZR+dRE0y3ihkkKzC4vVIH8SHWYg+FOsFnmEaRuIk67bT3UlOOp7orLHPStmB8RxkZinYKsykxmmDEwSIqo2IdtPpED8CD5EfOtG/DWbU2i3jkn8qiPBz/wBgj/CRSnDFLlv1MKWeG0UvQEocoB+ksdQOyp8zqT3fGiGCxgeQJOUCT3+mwqynCG5Wf9IqZeHXB/dx/lH50oLFD4X6uxy/kZGtS9FQJ4nxNkBVEct35THoedD+G3bgFw5LgItmIUietbUbjXmffRniWDc/VspBIkEMnfyM+Fcw1km3dVH62RBlNwZwVe3DwDtqNaJZYPa0EcGW7aYNwV820us6FSzlgCOZG1C1xam0UyAEL1Wy69oc57quvwi50hRrltDcZnUszQQNCCVB63WGnnRC17JCCDfQT3K28+JHKl40Fyxfxc0uIsscMf6q3rPVHvq4DVvA8Ft20C9IW7yAFk9+5q6mFsjSM3mx+QisvqYHTDosr52/IDxKyjDvVh7waB8I4fdvYJltIxbMcpBgSGVgc2wrdgoolVQAbkKCffqabdxa5cxudU7GeXhFRydVtsvU6cfQO95egOx2C/sqDEOHuWgGZhJgBYua89Mxigns1w5OjW4ZJ32nUeHhr8O6p/aHjFtsPdS3c67LlGjbMQG1juJqH2YxFpcOqXLiKwZtDpoTI1P615txcrtHq6GlwGcTiLaKWuXAqjmdP+TWbxXtJh5IVHI2zqqiR5MZ99apcMrK2W4SrCOqxy7g9obbRvzNCb3B7jNmN8NbhgUFu39pSAVYgmQSDJnarqu5OV9gILtq+qi3bVrmZyTctLkEhAC0EAEgAdrXKdDGl63wByiwljOpzRlyW50n7U8l1kbDSrlrCYhIU9GFMlWt21Qpz1EZWHgRPiN6ne1eMTcMDvB1210228d96Tl5CjHzKiC5bBACzOqxCjcEq6LqD4+81ZF5uRB8iD+VTJh/Kf4TH6UmsDnm9RP60kUIfpDAzHrH6Vx+Id4/r1FPfDD7Lfl8qq3cOw7/AIH5inSEWVxo6NyNOsg27w/d5VBe4ouVtR2TptrFV2tt0VzTZ7e4jlc86FuT3e4/kadICfgGIRQkjsC6P81wfktH/wBpJ/RNY6z1Sw15nb7zMal+lDv+dFILZo2u27lwr0TLny5nLMo0cTqAO+fHKKr2sVbRwEwjLBRARcbKoByyoywMoM9xIPmdEbbDcT/XhXVK8xFS3HpQDWxbFw58IrXAgDPJuW88jqhWMMFGmeNcuggAUets5VRIGUEQNRvOk7DlHhUyIp7jSOGXlpW/e8xUl2IRcI7QI8Yn5TTWxSg7jmd8ugEnWKmNthsZqN1B0dKe4UjN4rHWXuMgS5NzMvaUWwSskyQd4y7faNV8TjbOHItpavMLRyGGVgQpkySBMyda0v0K2dRoaccIRtB86nuPSgD0Vi0GfJcLXGYFlcEiMtzuAGaU2G586sYC3h74V7ltm6NggVmUascxdgoBywO/XKBFFyAO0n5j3VZwxRtY9cv601KV2JwVUPwrgooyquUZcq6KImI0FSv35qgYryVvdv6zXWdhr0Z9SK0rFsNuGdJ+Y+dQObg218x+lWFvn7vvOtOFkHZop7iAHFsXcCoPo5unUkZmXLuAPHafWqlnHxad/o5R2hWty4LAQq9cjYKCdBWma20xKtTMw2K+6CKw7NUgBw51uuC1jK9uXtlrjOMxyq2hA1yyRO2+9HrQc9tV30gzpymQNa6tu2eQ+RqXoO4n5ihWGxE1tfEH3V0WjybTxg1KQ3ODXVgHW2QfAVsRSxWHcghQNjtoaAvg7qfYI8VPWP8AiMRWtEnv9xrhQ/1I/WtqbjwZcU+TL2izGHUnwZOlPvYH4USRSuqryHZU2ztrsPzom9kHcD3V1cJ3SPKaPF7qKFo+rBqlm5t9ntlTtvBmauZG7wR/XdUptHvDeYpjAfcI8RvSnJy5NRio8ETIe4j8JHypCfvf5h+lTKO4t6iaeob+E+RrJogVZ3APlB+dI2l8R7xU4tAiSI89PjXEtA9l/jNFAV2w07GfQGoHwnh7iRRDoRzM+kVwIVnL8DPzFLYLBbYbqsvW1g6idp7vOqFzBKeSn4fOiyJcV2PSCGjqlI2311302ipxbneD5Un9GaRmjwpd8hHiNflTP2aO8+6tI9hRyjxH8q50Q++ffS3DYs5mG4rudTuK1JwNsiMo8+fvrMY64iXDbYiZ05SDzqklp5JxmpHOhHI0uuPH41FbytBRpmCPUT8qkZ2Xfbx/Ws6lVm6Oi+OYqRXB51TxHE7SdsgawddBMxPMCRFVbvEbUgK0yYMEGNP+AfMVKWaEVbYtNhR7I7qYbJGxoe3FLa/bn+Hdt4OnKJ1qzY4gjCQwiJnbTv1ojmxy4Y9MkTZnG4kUldTyjy/lT0vKYIMztFSWrauJYqANzmGnqNTR4sNWlPcKdDVJ5MD5iakIMczPn/xVHE8Zw1rS39a4+7t6n+dDL/tBfbsZbQ/hALepNdmPpss90qX1ODN12HE6bt+SNJ0T92UfxNHx2qG7irC9q5bBHccx+E1kbl1n1d2bzJNNBUa6CumPQv5mcM/a6+ReppX4tYHZNx/IEfMio244sdW0T+Jh+hrMXeJougk1D+1QT2aoujxrlfs55e1Mr4aX2QbxXtG+WUt2lPjJ+UUG/wCqMaWCg21k8k/UmqmJxSN9mDTcNlJ0GtVXSYuyRyy9pZ+7Yf4dx682jXBm11yL+lX2x93/ALn+lf0rO3cPkysOR191E7N2VBrfgRXZBDrsj2cn6lfjHFb6lVS6QdWMBdvdQe3xfFAgm+8TGy/pRXE2c7z/AAx7z/zVRsB1COeYmm8EfJE31mW37z9SweMXwut067HKkjx25VLwzjF1lAa4C3eUTX4UDxCwcs7D51HbYrqKy8UP/KCPV5l8z9TYNj7saMk9+QVAeJYsH+6bzDj5PVPB4rOB386tzSfTwfY6Idbl51Mnt8axA7Vm0fJmHzmrNvjE9uy6/huT/wCoqgDXQam+kxvsXj7RzLv+gvb4taG5cDuZZ+INO/aOHO922v4pT4sBQio7lpW0IBqb6KPZsuvaeRcpGitkPrbuBx/BcDD504pcH8wRWPPC7YbMAQR3GkMZeSOjv3BqBBOYe5qlPomvhZaHtSPzL0ZrjejtD1ml0iNv/XrWcf2gxNsMXS3dAC7jKd4bUelSYf2is3COktXLRGhiXUz3QN9Pga58mKcFbW30O3F1mLI6T3NCiDkx94NOhu8VVw1+1cjorlu5OkTDeoO1XbbSJysPCKi5I6VurRquVed+0n/zT+H8lpUq1m4JYyH2e/dj8K/7Uq5xfsjzH+x6VKvNzfDI6I9jM8X/AHlv/wAzUNufvLn/AJD8qVKuePw/gO7LuP7afgX/AGNT27B/GP8AcKVKsrhGu7LuA+x/X2xVjF//ABH/AAv/ALmpUqWH+6IT+F/YA8L/AH6+Sf7Fopf7R/EfnSpV9zh4X2Phuo+J/cYahx3YNcpVZnN3AwpxpUqmzYjV7hm5rtKhcilwEsV2TTsN2RSpVTsYXxD+dNXnSpUGmA7/AGn/AK51Da5+VdpVN8j7FvDdoUZpUq0zUDtOWlSoLI6K6u4pUqyUHPuaEv2h5ilSpdjE+xLiOy3l+YqXBdr1HyNKlXL1f9Mjs6P++IMf9/c/GPnXpXD/AN0n4R8qVKvJXxfhHv4fh/LP/9k="
            srcSet="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286&dpr=2 2x"
            loading="lazy"
            alt=""
          />
        </AspectRatio>
        
        <CardContent>
          <Typography fontSize="xl" fontWeight="lg">
            Jerba Manzel 
          </Typography>
          <Typography level="body-sm" fontWeight="lg" textColor="text.tertiary">
            +216 54 258 669
          </Typography>
        <Rating name="read-only" value={3} readOnly />
          {/* <Sheet
            sx={{
              bgcolor: 'background.level1',
              borderRadius: 'sm',
              p: 1.5,
              my: 1.5,
              display: 'flex',
              gap: 2,
              '& > div': { flex: 1 },
            }}
          >
            <div>
              <Typography level="body-xs" fontWeight="lg">
                Articles
              </Typography>
              <Typography fontWeight="lg">34</Typography>
            </div>
            <div>
              <Typography level="body-xs" fontWeight="lg">
                Followers
              </Typography>
              <Typography fontWeight="lg">980</Typography>
            </div>
            <div>
              <Typography level="body-xs" fontWeight="lg">
                Rating
              </Typography>
              <Typography fontWeight="lg">8.9</Typography>
            </div>
          </Sheet> */}
          <Box sx={{ display: 'flex', gap: 1.5, '& > button': { flex: 1 } }}>
            <Button variant="outlined" color="neutral">
              Reserver
            </Button>
            <Button variant="solid" color="primary">
              Modefier 
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
