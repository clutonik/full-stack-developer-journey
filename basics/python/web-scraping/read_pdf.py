import tabula

df = tabula.read_pdf('ifdc.pdf', pages='all')
print(df[0])
