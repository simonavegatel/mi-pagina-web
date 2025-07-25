import {
  Theme, Card, Button, Text, Flex, Heading, Box, Container, Separator, Avatar, Slider, Tooltip, Popover, DropdownMenu, ScrollArea, Inset, Link
} from '@radix-ui/themes';

export default function Servicios() {
  return (
    // El tema Radix solo se aplica dentro de este componente
    <Theme appearance="light" accentColor="pink" grayColor="sand">
      {/* Contenedor principal, con margen superior para no tapar el header */}
      <Container size="3" mt="9" mb="8">
        {/* Título principal de la página */}
        <Heading size="8" align="center" mb="2">
          Nuestros Servicios
        </Heading>
        {/* Subtítulo */}
        <Text size="5" align="center" color="gray" mb="7">
          Descubre todo lo que podemos ofrecerte usando los componentes de Radix Themes
        </Text>

        {/* Separador visual */}
        <Separator my="6" />

        {/* Sección de tarjetas de servicios */}
        <Flex direction="row" gap="5" justify="center" wrap="wrap" mb="8">
          {/* Tarjeta de servicio 1 */}
          <Card style={{ minWidth: 260, maxWidth: 320 }}>
            <Flex direction="column" align="center" gap="3">
              {/* Avatar decorativo */}
              <Avatar
                size="4"
                src="https://i.pravatar.cc/100?img=1"
                fallback="A"
                radius="full"
              />
              <Heading size="5">Diseño Web</Heading>
              <Text align="center">Creamos páginas web modernas, rápidas y adaptadas a tus necesidades.</Text>
              <Button color="crimson" variant="surface" radius="full" highContrast>
                Solicitar info
              </Button>
            </Flex>
          </Card>
          {/* Tarjeta de servicio 2 */}
          <Card style={{ minWidth: 260, maxWidth: 320 }}>
            <Flex direction="column" align="center" gap="3">
              <Avatar
                size="4"
                src="https://i.pravatar.cc/100?img=2"
                fallback="B"
                radius="full"
              />
              <Heading size="5">SEO & Marketing</Heading>
              <Text align="center">Mejoramos tu visibilidad online y atraemos más clientes a tu negocio.</Text>
              <Button color="crimson" variant="surface" radius="full" highContrast>
                Solicitar info
              </Button>
            </Flex>
          </Card>
          {/* Tarjeta de servicio 3 */}
          <Card style={{ minWidth: 260, maxWidth: 320 }}>
            <Flex direction="column" align="center" gap="3">
              <Avatar
                size="4"
                src="https://i.pravatar.cc/100?img=3"
                fallback="C"
                radius="full"
              />
              <Heading size="5">Soporte Técnico</Heading>
              <Text align="center">Asistencia rápida y profesional para cualquier problema tecnológico.</Text>
              <Button color="crimson" variant="surface" radius="full" highContrast>
                Solicitar info
              </Button>
            </Flex>
          </Card>
        </Flex>

        {/* Separador visual */}
        <Separator my="6" />

        {/* Sección de utilidades y navegación */}
        <Box mb="8">
          <Heading size="6" mb="3">Utilidades y navegación</Heading>
          <Flex gap="5" align="center" wrap="wrap">
            {/* DropdownMenu (menú desplegable) para acciones rápidas */}
            <DropdownMenu.Root>
              <DropdownMenu.Trigger>
                <Button>Más opciones</Button>
              </DropdownMenu.Trigger>
              <DropdownMenu.Content>
                <DropdownMenu.Item>Contacto</DropdownMenu.Item>
                <DropdownMenu.Item>Soporte</DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Root>
            {/* Popover (ventana flotante) para avisos */}
            <Popover.Root>
              <Popover.Trigger>
                <Button>Ver aviso</Button>
              </Popover.Trigger>
              <Popover.Content>
                <Text>¡Oferta especial solo por hoy!</Text>
              </Popover.Content>
            </Popover.Root>
            {/* Tooltip (mensaje flotante) para ayuda rápida */}
            <Tooltip content="Haz clic para más info">
              <Button>?</Button>
            </Tooltip>
          </Flex>
        </Box>

        {/* Separador visual */}
        <Separator my="6" />

        {/* Ejemplo de Slider (barra deslizante) para elegir nivel de soporte */}
        <Box mb="8">
          <Heading size="6" mb="3">Elige tu nivel de soporte</Heading>
          <Box style={{ width: 220 }}>
            <Text size="2">Nivel de soporte</Text>
            <Slider defaultValue={[50]} max={100} step={1} />
          </Box>
        </Box>

        {/* Ejemplo de ScrollArea (área con scroll personalizado) para opiniones */}
        <Box mb="8">
          <Heading size="6" mb="3">Opiniones de clientes</Heading>
          <ScrollArea type="always" scrollbars="vertical" style={{ height: 100, maxWidth: 400 }}>
            <Text>
              "¡Excelente servicio!" - Ana
              <br />"Muy profesionales y rápidos." - Carlos
              <br />"Repetiré sin duda." - Lucía
              <br />"Me ayudaron con todo." - Marta
              <br />"¡Recomendados!" - Juan
            </Text>
          </ScrollArea>
        </Box>

        {/* Ejemplo de Inset (imagen decorativa dentro de una tarjeta) */}
        <Card mb="8" style={{ maxWidth: 400, margin: '0 auto' }}>
          <Inset side="top" clip="border-box" pb="current">
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
              alt="Imagen decorativa"
              style={{ width: '100%', borderRadius: 8 }}
            />
          </Inset>
          <Text mt="3">¿Quieres ver más ejemplos? Visita nuestra <Link href="https://radix-ui.com/themes" target="_blank">web de Radix Themes</Link>.</Text>
        </Card>
      </Container>
    </Theme>
  );
}
