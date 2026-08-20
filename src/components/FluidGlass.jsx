/* eslint-disable react/no-unknown-property */
import * as THREE from 'three'
import { useRef, useState, useEffect, memo } from 'react'
import { Canvas, createPortal, useFrame, useThree } from '@react-three/fiber'
import {
  useFBO,
  useScroll,
  Image,
  Scroll,
  Preload,
  ScrollControls,
  MeshTransmissionMaterial,
  Text
} from '@react-three/drei'
import { easing } from 'maath'

/**
 * ReactBits FluidGlass Component
 * Supports Lens, Bar, and Cube modes with transmission glass refraction.
 */
export default function FluidGlass({ mode = 'lens', lensProps = {}, barProps = {}, cubeProps = {} }) {
  const Wrapper = mode === 'bar' ? Bar : mode === 'cube' ? Cube : Lens
  const rawOverrides = mode === 'bar' ? barProps : mode === 'cube' ? cubeProps : lensProps

  const {
    navItems = [
      { label: 'Home', link: '#home' },
      { label: 'About', link: '#about' },
      { label: 'Skills', link: '#skills' },
      { label: 'Projects', link: '#projects' },
      { label: 'Contact', link: '#contact' }
    ],
    ...modeProps
  } = rawOverrides

  return (
    <Canvas camera={{ position: [0, 0, 20], fov: 15 }} gl={{ alpha: true }}>
      <ScrollControls damping={0.2} pages={3} distance={0.4}>
        {mode === 'bar' && <NavItems items={navItems} />}
        <Wrapper modeProps={modeProps}>
          <Scroll>
            <Typography />
          </Scroll>
          <Scroll html />
          <Preload />
        </Wrapper>
      </ScrollControls>
    </Canvas>
  )
}

const ModeWrapper = memo(function ModeWrapper({
  children,
  lockToBottom = false,
  followPointer = true,
  modeProps = {},
  ...props
}) {
  const ref = useRef()
  const buffer = useFBO()
  const { viewport: vp } = useThree()
  const [scene] = useState(() => new THREE.Scene())

  useFrame((state, delta) => {
    if (!ref.current) return
    const { gl, viewport, pointer, camera } = state
    const v = viewport.getCurrentViewport(camera, [0, 0, 15])

    const destX = followPointer ? (pointer.x * v.width) / 2 : 0
    const destY = lockToBottom ? -v.height / 2 + 0.2 : followPointer ? (pointer.y * v.height) / 2 : 0
    easing.damp3(ref.current.position, [destX, destY, 15], 0.15, delta)

    gl.setRenderTarget(buffer)
    gl.render(scene, camera)
    gl.setRenderTarget(null)
  })

  const { scale, ior, thickness, anisotropy, chromaticAberration, ...extraMat } = modeProps

  return (
    <>
      {createPortal(children, scene)}
      <mesh scale={[vp.width, vp.height, 1]}>
        <planeGeometry />
        <meshBasicMaterial map={buffer.texture} transparent />
      </mesh>
      <mesh ref={ref} scale={scale ?? 0.15} {...props}>
        <cylinderGeometry args={[1.5, 1.5, 0.4, 32]} />
        <MeshTransmissionMaterial
          buffer={buffer.texture}
          ior={ior ?? 1.15}
          thickness={thickness ?? 5}
          anisotropy={anisotropy ?? 0.01}
          chromaticAberration={chromaticAberration ?? 0.1}
          {...extraMat}
        />
      </mesh>
    </>
  )
})

function Lens({ modeProps, ...p }) {
  return <ModeWrapper followPointer modeProps={modeProps} {...p} />
}

function Cube({ modeProps, ...p }) {
  return <ModeWrapper followPointer modeProps={modeProps} {...p} />
}

function Bar({ modeProps = {}, ...p }) {
  const defaultMat = {
    transmission: 1,
    roughness: 0,
    thickness: 10,
    ior: 1.15,
    color: '#ffffff',
    attenuationColor: '#ffffff',
    attenuationDistance: 0.25
  }

  return (
    <ModeWrapper
      lockToBottom
      followPointer={false}
      modeProps={{ ...defaultMat, ...modeProps }}
      {...p}
    />
  )
}

function NavItems({ items }) {
  const group = useRef()
  const { viewport, camera } = useThree()

  const DEVICE = {
    mobile: { max: 639, spacing: 0.2, fontSize: 0.035 },
    tablet: { max: 1023, spacing: 0.24, fontSize: 0.035 },
    desktop: { max: Infinity, spacing: 0.3, fontSize: 0.035 }
  }
  const getDevice = () => {
    const w = window.innerWidth
    return w <= DEVICE.mobile.max ? 'mobile' : w <= DEVICE.tablet.max ? 'tablet' : 'desktop'
  }

  const [device, setDevice] = useState(getDevice())

  useEffect(() => {
    const onResize = () => setDevice(getDevice())
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const { spacing, fontSize } = DEVICE[device]

  useFrame(() => {
    if (!group.current) return
    const v = viewport.getCurrentViewport(camera, [0, 0, 15])
    group.current.position.set(0, -v.height / 2 + 0.2, 15.1)

    group.current.children.forEach((child, i) => {
      child.position.x = (i - (items.length - 1) / 2) * spacing
    })
  })

  const handleNavigate = link => {
    if (!link) return
    link.startsWith('#') ? (window.location.hash = link) : (window.location.href = link)
  }

  return (
    <group ref={group} renderOrder={10}>
      {items.map(({ label, link }) => (
        <Text
          key={label}
          fontSize={fontSize}
          color="white"
          anchorX="center"
          anchorY="middle"
          depthWrite={false}
          outlineWidth={0}
          outlineBlur="20%"
          outlineColor="#000"
          outlineOpacity={0.5}
          depthTest={false}
          renderOrder={10}
          onClick={e => {
            e.stopPropagation()
            handleNavigate(link)
          }}
          onPointerOver={() => (document.body.style.cursor = 'pointer')}
          onPointerOut={() => (document.body.style.cursor = 'auto')}
        >
          {label}
        </Text>
      ))}
    </group>
  )
}

function Typography() {
  const DEVICE = {
    mobile: { fontSize: 0.2 },
    tablet: { fontSize: 0.4 },
    desktop: { fontSize: 0.6 }
  }
  const getDevice = () => {
    const w = window.innerWidth
    return w <= 639 ? 'mobile' : w <= 1023 ? 'tablet' : 'desktop'
  }

  const [device, setDevice] = useState(getDevice())

  useEffect(() => {
    const onResize = () => setDevice(getDevice())
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const { fontSize } = DEVICE[device]

  return (
    <Text
      position={[0, 0, 12]}
      fontSize={fontSize}
      letterSpacing={-0.05}
      outlineWidth={0}
      outlineBlur="20%"
      outlineColor="#000"
      outlineOpacity={0.5}
      color="white"
      anchorX="center"
      anchorY="middle"
    >
      Nihindu Dulavin
    </Text>
  )
}
