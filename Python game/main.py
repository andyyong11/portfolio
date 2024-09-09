import pygame

pygame.init()

color = (255,255,255)
position = (0,0)

#Create Board
canvas = pygame.display.set_mode((500,500))

#title of Board
pygame.display.set_caption("My board")
exit = False

while not exit:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            exit = True
    pygame.display.update()
