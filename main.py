import tkinter as tk
from tkinter import filedialog
import openpyxl
import os

def process_excel_file():
    # 파일 선택 대화상자 열기
    file_path = filedialog.askopenfilename(filetypes=[("Excel files", "*.xlsx;*.xls")])

    if not file_path:
        return  # 사용자가 취소를 누르면 함수 종료

    try:
        # 엑셀 파일 열기
        workbook = openpyxl.load_workbook(file_path)

        # 3번째 시트 선택
        sheet = workbook.worksheets[2]  # 인덱스는 0부터 시작하므로 3번째 시트는 인덱스 2

        # A:3 셀에 1 입력
        sheet['A3'] = 1

        # 새로운 파일명 생성 (원본 엑셀 파일명 앞에 '수정본__' 추가)
        base_name = os.path.basename(file_path)
        dir_name = os.path.dirname(file_path)
        new_file_name = os.path.join(dir_name, f"수정본__{base_name}")

        # 변경된 내용을 새로운 파일로 저장
        workbook.save(new_file_name)
        tk.messagebox.showinfo("Success", f"File saved successfully as {new_file_name}")

    except Exception as e:
        tk.messagebox.showerror("Error", f"An error occurred: {str(e)}")

# 메인 윈도우 생성
root = tk.Tk()
root.title("Excel Processor")

# 버튼 추가
button = tk.Button(root, text="Process Excel File", command=process_excel_file)
button.pack(pady=20)

# 윈도우 실행
root.mainloop()
