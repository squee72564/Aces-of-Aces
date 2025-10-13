class Hex {
  _q: number = 0;
  _r: number = 0;
  _s: number = 0;

  constructor(q: number, r: number, s: number) {
    if (q + r + s !== 0) {
      throw Error("Invalid construction of Hex");
    }
    this._q = q;
    this._r = r;
    this._s = -q - r;
  }

  q(): number {
    return this._q;
  }

  r(): number {
    return this._r;
  }

  s(): number {
    return this._s;
  }

  equals(other: Hex): boolean {
    return other._q === this._q && other._r === this._r && this._s === other._s;
  }

  notEquals(other: Hex): boolean {
    return !this.equals(other);
  }

  add(other: Hex): Hex {
    return new Hex(this._q + other._q, this._r + other._r, (this._s = other._s));
  }

  neighbor(direction: number): Hex {
    const newHex = hexDirections[direction];

    if (newHex === undefined) {
      throw new Error("Invalid Hex Direction");
    } else {
      return newHex;
    }
  }
}

const hexDirections = [
  new Hex(1, 0, -1),
  new Hex(1, -1, 0),
  new Hex(0, -1, 1),
  new Hex(-1, 0, 1),
  new Hex(-1, 1, 0),
  new Hex(0, 1, -1),
];

function _hexToPixel(hex: Hex, size: number) {
  const x = size * ((3 / 2) * hex.q());
  const y = size * (Math.sqrt(3) * (hex.r() + hex.q() / 2));
  return { x, y };
}

function _hexRelativeToCenter(other: Hex, center: Hex): Hex {
  return new Hex(other.q() - center.q(), other.r() - center.r(), other.s() - center.s());
}

// const canvas = document.querySelector('canvas');
// const ctx = canvas.getContext('2d');

// const canvasHeight = 300;
// const canvasWidth = 600;
// canvas.width = canvasWidth;
// canvas.height = canvasHeight;

// function drawHex(
//   ctx: CanvasRenderingContext2D,
//   x: number,
//   y: number,
//   size: number,
//   label: string
// ) {
//   ctx.beginPath();
//   for (let i = 0; i < 6; i++) {
//     const angle = (Math.PI / 3) * i;
//     const px = x + size * Math.cos(angle);
//     const py = y + size * Math.sin(angle);
//     if (i === 0) ctx.moveTo(px, py);
//     else ctx.lineTo(px, py);
//   }
//   ctx.closePath();
//   ctx.stroke();

//   ctx.font = `${size / 2}px Arial`;
//   ctx.fillStyle = 'black';
//   ctx.textAlign = 'center';
//   ctx.textBaseline = 'middle';
//   ctx.fillText(label, x, y);
// }

// const hexSize = 22;

// const centerHex = new Hex(0, -3, 3); // starts at 0,0,0
// const otherHex = new Hex(2, -3, 1); // some arbitrary position

// function drawScene() {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);

//   const hexes = new Set<Hex>();

//   const N = 3;
//   for (let q: number = -N; q <= N; q++) {
//     const r1 = Math.max(-N, -q - N);
//     const r2 = Math.min(N, -q + N);
//     for (let r = r1; r <= r2; r++) {
//       hexes.add(hexRelativeToCenter(centerHex, new Hex(q, r, -q - r)));
//       console.log(q, r, -q - r);
//     }
//   }

//   // Draw all hexes relative to center
//   hexes.forEach((hex) => {
//     const relHex = hexRelativeToCenter(hex, centerHex);
//     const { x, y } = hexToPixel(relHex, hexSize);

//     if (!hex.equals(otherHex)) {
//       drawHex(
//         ctx,
//         x + canvas.width / 2,
//         y + canvas.height / 2,
//         hexSize,
//         `${relHex.q()}/${relHex.r()}/${relHex.s()}`
//       );
//     } else {
//       drawHex(
//         ctx,
//         x + canvas.width / 2,
//         y + canvas.height / 2,
//         hexSize,
//         'Other'
//       );
//     }
//   });
// }

// drawScene();
